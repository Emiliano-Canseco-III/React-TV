import "./shows.css";
import PropTypes from "prop-types";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav>
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          onClick={() => setSelectedShow(show)}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}

ShowSelection.propTypes = {
  shows: PropTypes.array.isRequired,
  setSelectedShow: PropTypes.func.isRequired,
};
