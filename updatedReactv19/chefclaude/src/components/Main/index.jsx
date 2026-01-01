import "./index.css";

const Main = () => {
  const ingredients = ["chicken", "oregano", "tomatoes"];

  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}> {ingredient}</li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // getting new ingredient, when user types in input field
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    // console.log(newIngredient);
    ingredients.push(newIngredient);
    console.log(ingredients);
  };

  return (
    <main>
      {/*  eslint-disable-next-line react-hooks/immutability */}
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g., oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
  );
};

export default Main;
