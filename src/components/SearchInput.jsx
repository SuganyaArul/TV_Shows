
export default function SearchInput({setSearchTerm,searchTerm}){
  
  return (
    <form >
      <label htmlFor="searchShows">Search for Shows/People here</label>
      <input
        id="searchShows"
        type="text"
        value={searchTerm}
        onChange={(event) => {
            setSearchTerm(event.target.value);
        }}
      ></input>
    </form>
  );
}