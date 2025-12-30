import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "../data";
import './App.css'

const App = () => {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        {...entry}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
};

export default App;

// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://scrimba.com/links/travel-journal-japan-image-url

// Australia
// https://scrimba.com/links/travel-journal-australia-image-url

// Norway
// https://scrimba.com/links/travel-journal-norway-image-url
