import { useEffect, useState } from "react";
import Header from "./Header";
import ShowsList from "./ShowsList";
import ShowsSearch from "./ShowsSearch";
import '../App.css';
import PeopleSearch from "./PeopleSearch";
import PeopleList from "./PeopleList";

function App() {

  const [shows, setShows] = useState([])
  const [searchShows, setSearchShows] = useState('');
  const [people, setPeople] = useState([]);
  const [searchPeople, setSearchPeople] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchShows}`)
    .then((response) => {
      return response.json()
    }).then((body) => {
      setShows(body)
    })
  }, [searchShows])

  useEffect(() =>{
    fetch(`https://api.tvmaze.com/search/people?q=${searchPeople}`)
    .then((response) => {
      return response.json()
    }).then((body) => {
      setPeople(body)
    })
  },[searchPeople])

  return (<>
  <Header />
  <ShowsSearch setSearchShows={setSearchShows}/>
  <PeopleSearch setSearchPeople={setSearchPeople}/>
  <PeopleList people={people}/>
  <ShowsList shows={shows}  />
  </>)
}

export default App;
