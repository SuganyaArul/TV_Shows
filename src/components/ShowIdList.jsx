import { useState } from "react";
import ShowIdCast from "./ShowIdCast";
import ShowIdEpisodes from "./ShowIdEpisodes";

export default function ShowIdList({ showId, searchTerm, err, setIsCast }) {

  return showId.length !== 0 || typeof searchTerm === "number" ? (
    <li className="show">
      <h2>TV Show tite: {showId.name}</h2>
      <p>Genre: {showId.genres[0]}</p>
      <p>
        Average rating:{" "}
        {showId.rating.average === null
          ? (showId.rating.average = "N/A")
          : showId.rating.average}
      </p>
      {showId.image !== null ? (
        <img src={showId.image.medium} />
      ) : (
        <img alt="No image for This Shows" />
      )}
      <ShowIdCast showId={showId} setIsCast={setIsCast} />
      {/* <ShowIdEpisodes showId={showId} /> */}
    </li>
  ) : (
    `Error: ${err}`
  );
}
