import "./shows.css";
import { useState } from "react";
import PropTypes from "prop-types";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p className="select-prompt">Please select a show!</p>;
  }

  return (
    <section className="show-details">
      <h2>{show.name}</h2>
      <div className="main-grid">
        <EpisodeList episodes={show.episodes} onSelect={setSelectedEpisode} />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </section>
  );
}

ShowDetails.propTypes = {
  show: PropTypes.object,
};
