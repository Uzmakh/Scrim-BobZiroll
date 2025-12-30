import React from "react";
import ReactDOM from "react-dom";

// const navbar = (
//     <nav>
//         <h1>Brand Logo</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>

//         </ul>
//     </nav>
// );
// ReactDOM.render(navbar, document.getElementById("root"));     //React-17
// ReactDOM.createRoot(document.getElementById("root").render(navbar));    //React-18

// Mor precise way to write above syntax
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(navbar);

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )

// document.getElementById("root").append(JSON.stringify(page));
// console.log(page);
//[object object]-string representation of our regular JS object

// Mor precise way to write above syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(page);


/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

*/