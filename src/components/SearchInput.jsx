import { useState } from "react";
export default function SearchInput({setSearchTerm,searchTerm}){
    

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
        value={searchTerm}
        onChange={(event) => {
            setSearchTerm(event.target.value);
        }}
      ></input>
      <button>Search</button>
    </form>
  );
}