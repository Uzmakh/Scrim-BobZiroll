import { useState } from "react";

const TogglingState = () => {
  const [isGoingOut, setIsGoingOut] = useState(false);

  const handleToggle = () => {
    // setIsGoingOut(!isGoingOut)
    setIsGoingOut((prev) => !prev);
  };
  return (
    <div>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        onClick={handleToggle}
        aria-label={`Current answer is ${
          isGoingOut ? "Yes" : "No"
        }. Click to change it.`}
      >
        {isGoingOut ? "yess" : "no"}
      </button>
    </div>
  );
};

export default TogglingState;
