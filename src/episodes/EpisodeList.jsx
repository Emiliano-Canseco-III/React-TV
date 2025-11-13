import "./episodes.css";

/** A list of episode names that allows the user to select an episode */
export default function EpisodeList({ setSelectedEpisode, episodes, name }) {
  return (
    <section className="episodes">
      <h2>{name}</h2>
      <ol>
        {episodes.map((episode, index) => (
          <li
            key={episode.title}
            className="episode-item"
            onClick={() =>
              setSelectedEpisode({ ...episode, number: index + 1 })
            }
          >
            {episode.title}
          </li>
        ))}
      </ol>
    </section>
  );
}
