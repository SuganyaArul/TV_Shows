
export default function Shows({name, rating, genres, medium}){
    

    return (   
        <li className="show">
            <h2>TV Show tite: {name}</h2>
            <p>Genre: {genres[0]}</p>
            <p>Average rating: {rating.average === null ? rating.average = 'N/A' : rating.average}</p>
            <img src={medium}/>
        </li>
    )

}