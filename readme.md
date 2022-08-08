# Phantom Links

[phantom-links.netlify.app](https://phantom-links.netlify.app/)

## Design

- The app is built with Vite, React, Typescript and Stitches
- Logic is separated in components, services and utils
  - Services hold the business logic and serve as a place to store data and state
- Links that are submitted by the user will be processed in the SubmissionService. It exposes an add, edit and delete function and handles validation internally

## Limitations

- As there are no backend technologies used, all saving and validating data will synchronous. If we introduce a database we will also have to deal with asynchronous functions for add/edit/delete.
- Since it's not possible to check if a url really exists a lot of invalid data can be entered and we can only check if the structure is correct
- Right now for common components there are only enough variants to satisfy the current design. If this was a real app there would need to be more effort put into creating variants for Buttons, Text, Headline and so on
