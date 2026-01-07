import { useState } from "react";
import "./index.css";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient}</li>
  ));

  const addIngredient = (formData) => {
    console.log("Form submitted!");

    const newIngredient = formData.get("ingredient");

    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  };

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g., oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul className="listItems">{ingredientListItems}</ul>
    </main>
  );
};

export default Main;
