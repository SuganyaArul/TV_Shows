import { useEffect, useState } from "react";
import Header from "./Header";
import ShowsList from "./ShowsList";
import ShowsSearch from "./ShowsSearch";
import '../App.css';
import PeopleSearch from "./PeopleSearch";
import PeopleList from "./PeopleList";
import getData from "../utils/utils";

function App() {

  const [shows, setShows] = useState([])
  const [searchShows, setSearchShows] = useState('');
  const [people, setPeople] = useState([]);
  const [searchPeople, setSearchPeople] = useState('');

  useEffect(() => {
    getData(searchShows,searchPeople).then((body) => {
      console.log(body);
      searchShows?setShows(body):
      setPeople(body)
    })
  }, [searchShows,searchPeople])

  // useEffect(() =>{
  //   getData(searchPeople).then((body) => {
  //     setPeople(body)
  //   })
  // },[searchPeople])

  return (<>
  <Header />
  <ShowsSearch setSearchShows={setSearchShows}/>
  <PeopleSearch setSearchPeople={setSearchPeople}/>
  <PeopleList people={people}/>
  <ShowsList shows={shows}  />
  </>)
}

export default App;
