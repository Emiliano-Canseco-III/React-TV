import "./shows.css";
import { useState } from "react";
import PropTypes from "prop-types";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p>Please select a show!</p>;
  }

  return (
    <section>
      <h2>{show.name}</h2>
      <EpisodeList episodes={show.episodes} onSelect={setSelectedEpisode} />
      <EpisodeDetails episode={selectedEpisode} />
    </section>
  );
}

ShowDetails.propTypes = {
  show: PropTypes.object,
};
