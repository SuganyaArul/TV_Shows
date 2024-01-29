import Shows from "./Shows";
import Chart from "./Chart";

export default function ShowsList({ shows }) {
    
  return (
    <>
      <ol className="show-list">
        {shows.map((show) => {
          const {
            show: { name, rating, genres, image:{medium} },
          } = show;
          return (
            <Shows
              key={`${name}-${rating}`}
              name={name}
              rating={rating}
              genres={genres}
              medium={medium}
            />
          );
        })}
      </ol>
      {shows.length !== 0 ? <><h2>Average TV Show Rating Chart</h2> <Chart shows={shows}/> </>: null}
      
    </>
  );
}
