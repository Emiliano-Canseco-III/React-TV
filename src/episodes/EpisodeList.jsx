import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({
  name,
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <section className="episodes">
      <h2>{name}</h2>
      <ol>
        {episodes.map((episode, index) => (
          <li
            key={episode.number ?? index}
            onClick={() =>
              setSelectedEpisode({ ...episode, number: index + 1 })
            }
            className={episode === selectedEpisode ? "selected" : ""}
          >
            {episode.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
