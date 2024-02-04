import { useState } from "react";
import Cast from "./Cast";
export default function ShowIdCast({ showId, setIsCast }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    setIsCast(!isOpen);
  }

  return (
    <>
      <button onClick={handleClick}>{isOpen ? "hide" : "show"} Cast</button>
      {isOpen ? (
        <div>
          {/* console.log(showId._embedded) */}
          {showId._embedded.cast.map((people) => {
                console.log(people);
                const  {person :{id}, character} = people
                  return  <Cast key= {`${id}`} person={person} character={character} />
              })}
        </div>
      ) : null}
    </>
  );
}
