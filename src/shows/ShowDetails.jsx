import "./shows.css";
import { useState } from "react";
import PropTypes from "prop-types";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p className="select-prompt">Please select a show!</p>;
  }

  return (
    <section className="show-details">
      <div className="main-grid">
        <div className="left-column">
          <h2 className="show-title">{show.name}</h2>
          <EpisodeList episodes={show.episodes} onSelect={setSelectedEpisode} />
        </div>

        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}

ShowDetails.propTypes = {
  show: PropTypes.object,
};
