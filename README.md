# Portfolio
How to run: `npm start`

<img width="828" alt="Screenshot 2023-09-06 at 12 34 32" src="https://github.com/LiviaGitHub/portfolio/assets/50983740/27d05445-c631-4d8f-ac52-af74d1ffa016">


# TO HELP
* https://github.com/airbnb/javascript/tree/master/react

* files:
    - `App.js` It is the main component of the application, where most of the logic and visual components are organized.
    - `index.js` It serves as the entry point of the React application, connecting React to the DOM of the HTML page.

* Single vs Multiple Exports:
    - `export default` allows you to export a single value per file.
    - `export` allows you to export multiple named values from the same file.
- Name Flexibility:
    - With `export default`, the name used during import is flexible.
    - With `export`, the name must match the one used during export.
- Summary:
    - Use `export default` when your module or component is the main one in the file.
    - Use `export` when you want to export multiple modules or components from the same file.

* `RouterProvider` is responsible for enabling the routing system in a React application, connecting URLs to the components that should be rendered, all managed by the router object.
