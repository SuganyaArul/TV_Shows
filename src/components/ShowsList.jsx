import Shows from "./Shows"

export default function ShowsList({shows}){

    return <ol>

    {shows.map((show) => {
        // console.log(show.show);
        const {show: {name, rating, genres}} = show
        return <Shows key={`${name}-${rating}`} name={name} rating={rating} genres={genres} />
        
    })}

    </ol>
}