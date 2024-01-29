import { useState } from "react";
export default function PeopleSearch({setSearchPeople}){
    const [inputPeople, setInputPeople] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      setSearchPeople(inputPeople);
      setInputPeople('')
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchPeople">Search for People here</label>
        <input
          id="searchPeople"
          type="text"
          value={inputPeople}
          onChange={(event) => {
            setInputPeople(event.target.value);
          }}
        ></input>
        <button>Search</button>
      </form>
    );

}