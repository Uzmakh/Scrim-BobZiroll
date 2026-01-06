import { useState } from "react";

const ArrayState = () => {
  const [myFavoriteThings, setMyFavoriteThings] = useState([
    "pencil", "eraser","scale",
  ]);

  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevFavoriteThings) => [
      ...prevFavoriteThings,
      "newFavoriteThing",
    ]);
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
};

export default ArrayState;
