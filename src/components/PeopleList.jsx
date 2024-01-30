import People from "./People"
export default function PeopleList({people}){
    return (
        <ol className="people-list">
            {people.map((person)=>{
                console.log(person);
                const {person:{country,name,image,id}}=person
                return <People key={`${id}`} name={name} country={country} image={image}/>
            })}
        </ol>
    )
}