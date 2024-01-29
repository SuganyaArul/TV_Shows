import { useState } from "react";

export default function ShowsSearch({ searchShows, setSearchShows }) {
  const [inputShow, setInputShow] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchShows(inputShow);
    setInputShow('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchShows">Search for Shows here</label>
      <input
        id="searchShows"
        type="text"
        value={inputShow}
        onChange={(event) => {
          setInputShow(event.target.value);
        }}
      ></input>
      <button>Search</button>
    </form>
  );
}
