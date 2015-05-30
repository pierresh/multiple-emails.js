multiple-emails.js
==================

Enter multiple emails in a single input field with jQuery.

This is an improved version of the original work of Jamie Bradley http://t2a.co/blog/index.php/multiple-value-input-field-with-jquery/.

Demo and documentation: http://alplob.github.io/multiple-emails.js/
Forked from: https://github.com/Alplob/multiple-emails.js

Made a few improvements and changes to the original code done by Alplob.

JavaScript:
- JS file now can generates the semantic UI code, if specified. It can also generate a basic alternative without using CSS frameworks. Originally it was just bootstrap. The default, if you don't specify any arguments for the function is bootstrap
- Added code to prevent enter key default action. This is to prevent the form from submitting with the submit button when you press enter in the email text box
- Fixed the refresh_emails to support many multiple email inputs. The previous existing problem was if you use the plugin for multiple inputs, the value of the input would be shared when you call this function due to the incorrect CSS selector used.
CSS:
- Added "box-sizing: border-box;" CSS so the text input device doesn'tcause a strange white space gap in the border of the email container. 
- Also changed various properties to have "!important" as so that SemanticUI does NOT overwrite them
