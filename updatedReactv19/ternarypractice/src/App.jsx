import ArrayState from "./components/ArrayState";
import TogglingState from "./components/TogglingState";

export default function App() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  // const isGoingOut = false;

  // let answer = isGoingOut === true ? "Yes" : "No" // 👈 Use ternary here

  // Remove the code below 👇 once your ternary is done
  // if (isGoingOut === true) {
  //   answer = "Yes"
  // } else {
  //   answer = "No"
  // }

  return (
    <main>
      
      {/* <h1 className="title">Do I feel like going out tonight?</h1>
     
      <button className="value">{isGoingOut ? "Yes" : "No"}</button> */}

      {/* <TogglingState /> */}
      <ArrayState/>
    </main>
  )
}
