
export default function Shows({name, rating, genres, image}){
    

    return (   
        <li className="show">
            <h2>TV Show tite: {name}</h2>
            <p>Genre: {genres[0]}</p>
            <p>Average rating: {rating.average === null ? rating.average = 'N/A' : rating.average}</p>
            { image!==null?
            <img src={image.medium}/>:
            <img alt='No image for This Shows'/>
            }
        </li>
    )

}