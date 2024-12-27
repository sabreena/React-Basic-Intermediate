# Description

This repository contains exercises on React, covering both basic and intermediate concepts.

# Installation Instructions

Install dependencies:

`npm install`

Run the project:

`npm run dev`

# Task

Create a form with an email and password input that check for the following validations:
Email:
Required (Cannot be blank)
Must end in @webdevsimplified.com
Password:
Required (Cannot be blank)
Must Be 10 characters or longer
Must include a lowercase letter
Must include an uppercase letter
Must include a number
Show error messages next to the inputs every time the form is submitted if there are any. If there are no errors alert the message Success.
If you did the first 2 steps using refs, repeat the same thing with state instead. If you used state for the first 2 steps instead repeat the same thing with refs.

# Bonus
Make it so that the error messages show up when you submit the form (just like step 2), but also make it so the error messages will automatically update when you change the value in each input but only after the first time you submit the form.
For example if you type in an email that is incorrect and submit the form it should show an error message. Then when you go back and start making changes to the email input, the error message should update with the current errors as you change the input and disappear when the input is valid.