multiple-emails.js
==================

Enter multiple emails in a single input field with jQuery.

This is an improved version of the original work of Jamie Bradley http://t2a.co/blog/index.php/multiple-value-input-field-with-jquery/.

## New features are:
- can display emails once the page is loaded
- check integrity of inputted email address
- emails are encapsulated in json
- added support for copy and pasting bulk emails in the input field
- works very well with Bootstrap and Semantic UI

## Options

	$(selector).multiple_emails({
	   position: 'top', // Display the added emails above the input
	   theme: 'bootstrap', // Bootstrap is the default theme
	   checkDupEmail: true // Should check for duplicate emails added
	});