# Phantom Links

[phantom-links.netlify.app](https://phantom-links.netlify.app/)

## Design

- The app is built with Vite, React, Typescript and Stitches
- Logic is separated in components, services and utils
  - Services hold the business logic and serve as a place to store data and state
- Links that are submitted by the user will be processed in the SubmissionService. It exposes an add, edit and delete function and handles validation internally
- For every link a custom icon is crated based on the url
	- A pseudo random number generator is used to generate paramters like color, rotation and position. This means that given the same seed the same icon can be reproduced, which will guarantee a consitent appearance even whenn reloading the page
	- The concept could be expanded to include animation and more variation as well

## Limitations

- As there are no backend technologies used, all saving and validating data will synchronous. If we introduce a database we will also have to deal with asynchronous functions for add/edit/delete
- Since it's not possible to check if a url really exists a lot of invalid data can be entered (eg.: jsdhgkj.hd ) and we can only check if the structure is correct
- Right now for common components there are only enough variants to satisfy the current design. If this was a real app there would need to be more effort put into creating variants for Buttons, Text, Headline and so on
- As the content is overwhelmingly dynamic data no meta framework is used. If there was more static data it would probably make more sense to use one
