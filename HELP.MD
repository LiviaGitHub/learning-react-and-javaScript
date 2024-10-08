# To help

* Introducing Hooks: 
    - https://legacy.reactjs.org/docs/hooks-intro.html
* Airbnb React/JSX Style Guide: 
    - https://github.com/airbnb/javascript/tree/master/react
* useSate: https://legacy.reactjs.org/docs/hooks-reference.html#usestate
* HTML Event Attributes: https://www.w3schools.com/tags/ref_eventattributes.asp  
* <dl> The Description List element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
* Conditional_operator:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    - https://legacy.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
* Substring / Find / Filter / Map / Reduce: 
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

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

* Named Export and Default Export:
    - When you export something using `export const` or `export function`, it is called `named export`. In this case, you must import the exported item by its exact name.
    - `Named export:` Use { EmojiItem } when exporting and importing.
    - export const EmojiItem = () => {}
    - import { EmojiItem } from './EmojiItem';

    - Standard export: Use export default and import directly with EmojiItem.
    - export default EmojiItem;
    - import EmojiItem from './EmojiItem'. Nesse caso, a importação não precisa ser nomeada com { }.
    - Se você usar `export default`, o que for exportado será considerado o valor padrão do módulo.

    - In both cases, the usage of the component would be the same within the JSX of another component.
    - <p>{props.meaning}</p>

* `RouterProvider` is responsible for enabling the routing system in a React application, connecting URLs to the components that should be rendered, all managed by the router object.

* Statements vs Expressions: 
    - Statements perform actions and do not return values ​​directly; you cannot use them within JSX directly.
    `Example:`
        <!-- function MyComponent() {
            return (
                <h1>
                {isLoggedIn ? 'Welcome back!' : 'Please log in.'}
                </h1>
        );} -->
    - Expressions return a value and can be used directly within JSX with { }.
    `Example:`
        <!-- function MyComponent() {
            return (
                <h1>
                {isLoggedIn ? 'Welcome back!' : 'Please log in.'}
                </h1>
        );} -->
  
    