/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
ReactDOM.render(
    <ul><li>Thing 1</li><li>Thing 2</li></ul>,
    document.getElementById("root")
)


// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge: 1 - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/
const h1 = document.createElement("h1");
const div = document.querySelector("#root");

h1.textContent = "Let's learn JavaScript!";
h1.className = "header";
div.append(h1);
// This is imperative way to tell the machine each step of what to do, in Vanilla JS.

// Alternatively, we can do this in declarative way in React.   
// This is JSX
ReactDOM.render(<h1 className="header">Hello,React!</h1>, document.getElementById("root"));
// OR
const element = <h1 className="header">Hello,React!</h1>;

ReactDOM.render(element, document.getElementById("root"));

// whats the difference
console.log(h1);        //<h1>   </h1>
console.log(element);   //object



// Putting elements in a div
ReactDOM.render(
    // put more elements in a div
    <div>
        <h1 className="header">Hello,React!</h1>
        <p>This is JSX</p>
    </div>
        , document.getElementById("root"));


// I can save the whole JSX into a single variable and that variable can be used in rendering and can be get back as JS object in console.log
const page = (<div>
    <h1 className="header">Hello,React!</h1>
    <p>This is JSX</p>
</div>);
ReactDOM.render(page, document.getElementById("root"));
console.log(page);


/* 
Challenge: 2

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>Brand Logo</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        
        </ul>
    </nav>
);
ReactDOM.render(navbar, document.getElementById("root"));