# Description

This repository contains exercises on React, covering both basic and intermediate concepts.

# Installation Instructions

Install dependencies:

`npm install`

Run the project:

`npm run dev`

# Task

Create a custom useFetch hook that returns an object with the following data:
isLoading - Will be true while the fetch request is loading
isError - Will be true if the fetch request failed
data - Will contain the data from the fetch request

# Bonus
Add the ability to pass down an options object to the useFetch hook that will set the options for the fetch request.
If you are using the local files instead of the API you will not see any difference in the output when passing these custom options just because of the limitations of not actually calling an API on a server.
Add in the proper cleanup functionality for aborting a request if a new request is triggered before the old one finishes.