import { useState } from "react";

const ComplexStateArray = () => {
  const [myFavThings, setMyFavThings] = useState(["💦🌹", "😺"]);

  // const allFavoriteThings = [
  //   "💦🌹",
  //   "😺",
  //   "💡🫖",
  //   "🔥🧤",
  //   "🟤🎁",
  //   "🐴",
  //   "🍎🥧",
  //   "🚪🔔",
  //   "🛷🔔",
  //   "🥩🍝",
  // ];

  const thingsElements = myFavThings.map((thing) => {
    return <p key={thing}>{thing}</p>;
  });
  function addFavThings() {
    //* myFavThings.push("Test"); //this won't work bcz simply modifying the state value directly, doesn't trigger re-render in React; setter function is designed for this purpose,to trigger re-render in react. You can't directly modify state in react.
    setMyFavThings((prevFavThings) => [...prevFavThings, "Test"]);
    // setMyFavThings((prevFavThings) => [...prevFavThings, allFavoriteThings(prevFavThings.length)]);
    //*there are two options for setter function as parameters; do we provide a bare new value or do we want to provide a call back function.We provide a new value if we don't care about the old value, And we provide a callback function, if we care about the previous value of state(using the previous value of state to help us determine the new value state; here we need to remember what were already present in the array-items)
  }
  return (
    <div>
      <button onClick={addFavThings}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </div>
  );
};

export default ComplexStateArray;
