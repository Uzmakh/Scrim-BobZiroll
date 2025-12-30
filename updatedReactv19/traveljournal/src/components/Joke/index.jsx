import "./index.css";

const Joke = (props) => {
  console.log(props);
  return (
    <>
      <div className="container">
        <p className="setup" style={{display:props.setup?"block":"none"}}>Setup: {props.setup }</p>
        <p className="punchline">Punchline: {props.punchline}</p>
      </div>
      <hr />
    </>
  );
};

export default Joke;
