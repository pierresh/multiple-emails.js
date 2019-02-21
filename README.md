multiple-emails.js
==================

Enter multiple emails in a single input field with jQuery.

This project is forked from Pierre Clavequin's project at https://github.com/pierresh/multiple-emails.js.

Pierre's project is an improved version of the original work of Jamie Bradley http://t2a.co/blog/index.php/multiple-value-input-field-with-jquery/.

## New features added to Pierre's work:

- "Basic" theme is now the default theme
- "Basic" theme now displays a "heavy multiplication x" (&#10006;) for the Remove icon
- rename old "Basic" theme to "Text" for clarity
- rename "Bootstrap" theme to "Bootstrap3" for clarity
- new "FontAwesome" theme
- add option to "validate" input or not (default is true)

## New features added to Jamie's work:

- can display emails once the page is loaded
- check integrity of inputted email address
- emails are encapsulated in json
- added support for copy and pasting bulk emails in the input field
- works very well with Bootstrap and Semantic UI

## Options

```javascript
	$(selector).multiple_emails({
	   position: 'top',       // Display the added emails above the input
	   theme: 'FontAwesome5', // Basic is the default theme
	   checkDupEmail: true,   // Should check for duplicate emails added
	   validate: false        // Should not validate input as email address(es)
	});
```
