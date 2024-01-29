export default function Shows({name, rating, genres}){
    console.log(name, rating, genres);
    console.log("hello");

    return (
    <li>
        <h2>TV Show tite: {name}</h2>
        <p>Genre: {genres[0]}</p>
        <p>Average rating: {rating.average === null ? rating.average = 'N/A' : rating.average}</p>
    </li>
    )

}