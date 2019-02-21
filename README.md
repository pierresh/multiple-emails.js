multiple-emails.js
==================

Enter multiple emails in a single input field with jQuery.

This project is forked from Pierre Clavequin's project at https://github.com/pierresh/multiple-emails.js.

Pierre's project is an improved version of the original work of Jamie Bradley http://t2a.co/blog/index.php/multiple-value-input-field-with-jquery/.

## New features added to Pierre's work by John:

- "Basic" theme is now the default theme
- "Basic" theme now displays a "heavy multiplication x" (&#10006;) for the Remove icon
- renamed old "Basic" theme to "Text" for clarity
- renamed "Bootstrap" theme to "Bootstrap3" for clarity
- added new "FontAwesome" theme
- added option to "validate" input or not (default is true)

## New features added to Jamie's work by Pierre (and others):

- can display emails once the page is loaded
- check integrity of inputted email address
- emails are encapsulated in json
- added support for copy and pasting bulk emails in the input field
- works very well with Bootstrap and Semantic UI

## Options

```javascript
$(selector).multiple_emails({
    position: 'top',          // Display the added emails above the input
    theme: 'FontAwesome',     // Basic is the default theme
    checkForDuplicates: true, // Should check for duplicate emails added
    validate: false           // Should not check for valid email address format
});
```
