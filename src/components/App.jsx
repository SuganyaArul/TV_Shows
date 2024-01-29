import { useEffect, useState } from "react";
import Header from "./Header";
import ShowsList from "./ShowsList";
import ShowsSearch from "./ShowsSearch";

function App() {

  const [shows, setShows] = useState([])
  const [searchShows, setSearchShows] = useState('')

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchShows}`)
    .then((response) => {
      return response.json()
    }).then((body) => {
      setShows(body)
    })
  }, [searchShows])

  return (<>
  <Header />
  <ShowsSearch searchShows={searchShows} setSearchShows={setSearchShows}/>
  <ShowsList shows={shows}  />
  </>)
}

export default App;
