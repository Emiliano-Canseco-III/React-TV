import { shows } from "./shows/data.js";
import { useState } from "react";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/showDetails.jsx";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection shows={shows} onSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
