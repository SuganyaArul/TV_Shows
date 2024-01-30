export default function SearchType({ handleTabChange }) {
  return (
    <>
      <select
        onChange={(event) => {
          handleTabChange(event.target.value);
        }}
      >
        <option value="shows">Show Name</option>
        <option value="people">People</option>
        <option value="showId">Show ID</option>
      </select>

    </>
  );
}
