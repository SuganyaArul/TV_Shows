export default function People({name, country, image}){
    
    return(
        <li className="person">
            <h2>{name}</h2>
            
            {image!==null?
            <img src={image.medium}/>:<img alt="No image"/>}
            <p>{country!==null?country.code:null}</p>
        </li>
    ) 

}