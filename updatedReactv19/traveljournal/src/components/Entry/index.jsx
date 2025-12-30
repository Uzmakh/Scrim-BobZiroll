import marker from "../../assets/marker.png";
import "./index.css";

const Entry = (props) => {
  console.log(props)
  return (
    <article className="journal-entry container">
      <div className="main-image-container">
        <img
          src={props.img?.src}
          alt={props.img?.alt}
          className="main-image"
        />
      </div>
      <div className="info-container">
        <img src={marker} alt="google marker pin icon" className="marker" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>
          View on Google maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">
         {props.text}
        </p>
      </div>
    </article>
  );
};

export default Entry;
