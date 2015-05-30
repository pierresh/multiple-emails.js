(function( $ ){
 
	$.fn.multiple_emails = function(theme) {
		//Set default to use Bootstrap
		theme = theme || "Bootstrap";
	
		var deleteIconHTML = "";
		if (theme.toLowerCase() == "Bootstrap".toLowerCase())
		{
			deleteIconHTML = '<a href="#" class="multiple_emails-close" title="Remove"><span class="glyphicon glyphicon-remove"></span></a>';
		}
		else if (theme.toLowerCase() == "SemanticUI".toLowerCase() || theme.toLowerCase() == "Semantic-UI".toLowerCase() || theme.toLowerCase() == "Semantic UI".toLowerCase()) {
			deleteIconHTML = '<a href="#" class="multiple_emails-close" title="Remove"><i class="remove icon"></i></a>';
		}
		else if (theme.toLowerCase() == "Basic".toLowerCase()) {
			//Default which you should use if you don't use Bootstrap, SemanticUI, or other CSS frameworks
			deleteIconHTML = '<a href="#" class="multiple_emails-close" title="Remove"><i class="basicdeleteicon">Remove</i></a>';
		}
		
		return this.each(function() {
			//$orig refers to the input HTML node
			var $orig = $(this);
			var $list = $('<ul class="multiple_emails-ul" />'); // create html elements - list of email addresses as unordered list

			if ($(this).val() != '' && IsJsonString($(this).val())) {
				$.each(jQuery.parseJSON($(this).val()), function( index, val ) {
					$list.append($('<li class="multiple_emails-email"><span class="email_name">' + val + '</span></li>')
					  .prepend($(deleteIconHTML)
						   .click(function(e) { $(this).parent().remove(); refresh_emails(); e.preventDefault(); })
					  )
					);
				});
			}
			
			var $input = $('<input type="text" class="multiple_emails-input text-left" />').on('keyup', function(e) { // input
				$(this).removeClass('multiple_emails-error');
				var input_length = $(this).val().length;
				
				var keynum;
				if(window.event){ // IE					
					keynum = e.keyCode;
				}
				else if(e.which){ // Netscape/Firefox/Opera					
					keynum = e.which;
                }
				
				//if(event.which == 8 && input_length == 0) { $list.find('li').last().remove(); } //Removes last item on backspace with no input
				
				// Supported key press is tab, enter, space or comma, there is no support for semi-colon since the keyCode differs in various browsers
				if(keynum == 9 || keynum == 32 || keynum == 188) { 
					display_email($(this));
				}
				else if (keynum == 13) {
					display_email($(this));
					//Prevents enter key default
					//This is to prevent the form from submitting with  the submit button
					//when you press enter in the email textbox
					e.preventDefault();
				}

			}).on('blur', function(event){ 
				if ($(this).val() != '') { display_email($(this)); }
			});

			var $container = $('<div class="multiple_emails-container" />').click(function() { $input.focus(); } ); // container div
 
			$container.append($list).append($input).insertAfter($(this)); // insert elements into DOM

			function display_email(t) {
				//value of input could be a long line of copy-pasted emails, not just a single email

				//Remove space, comma and semi-colon from beginning and end of string
				//Does not remove inside the string as the email will need to be tokenized using space, comma and semi-colon
				var arr = t.val().trim().replace(/^,|,$/g , '').replace(/^;|;$/g , '');
				//Split the string into an array, with the space, comma, and semi-colon as the seperator
				arr = arr.replace(/"/g,"");
				arr = arr.split(/[\s,;]+/);
				
				var errorEmails = new Array(); //New array to contain the errors
				
				var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
				
				for	(var i = 0; i < arr.length; i++) {
					if (pattern.test(arr[i]) == true) {
						$list.append($('<li class="multiple_emails-email"><span class="email_name">' + arr[i] + '</span></li>')
							  .prepend($(deleteIconHTML)
								   .click(function(e) { $(this).parent().remove(); refresh_emails(); e.preventDefault(); })
							  )
						);
					}
					else
						errorEmails.push(arr[i]);
				}
				if(errorEmails.length > 0)
					t.val(errorEmails.join("; ")).addClass('multiple_emails-error');
				else
					t.val("");
				refresh_emails ();
			}
			
			function refresh_emails () {
				var emails = new Array();
				var container = $orig.siblings('.multiple_emails-container');
				container.find('.multiple_emails-email span.email_name').each(function() { emails.push($(this).html()); });
				$orig.val(JSON.stringify(emails)).trigger('change');
			}
			
			function IsJsonString(str) {
				try { JSON.parse(str); }
				catch (e) {	return false; }
				return true;
			}
			
			return $(this).hide();
 
		});
		
	};
	
})(jQuery);
