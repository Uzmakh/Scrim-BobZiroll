import React from "react";
import avatar from "../../assets/user.png";
import starFilled from "../../assets/star-filled.png";
import starEmpty from "../../assets/star-empty.png";
import "./ObjectState.css";

const ObjectState = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore isFavorite for now)
   */

  /**
   * Challenge: Use a ternary to determine which star image variable
   * should be used based on the `contact.isFavorite` property. Test
   * your results by manually changing the isFavorite value in state.
   *
   * `true` => starFilled
   * `false` => starEmpty
   */

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    // console.log("Toggle Favorite");
    setContact(prevContact => {
      return {
        ...prevContact,  //use the spread syntax here to get all the keys of the object
        isFavorite: !prevContact.isFavorite
    }
    })
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite} //accessibility property
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default ObjectState;
