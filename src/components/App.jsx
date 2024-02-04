import { useEffect, useState } from "react";
import Header from "./Header";
import ShowsList from "./ShowsList";
import "../App.css";
import PeopleList from "./PeopleList";
import getData from "../utils/utils";
import SearchInput from "./SearchInput";
import SearchType from "./SearchType";
import ShowIdList from "./ShowIdList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [activeTab, setActiveTab] = useState("shows");
  const [err, setErr] = useState('')
  const [isCast, setIsCast] = useState(false)

  useEffect(() => {
    getData(activeTab, searchTerm, isCast)
      .then((body) => {
        console.log(body);
        setResult(body);
      })
      .catch((error) => {
        setErr(error.message)
        setResult([])
        throw error;
      });
  }, [searchTerm, activeTab, err, isCast]);

  function handleTabChange(tab) {
    setSearchTerm("");
    setActiveTab(tab);
    setResult([]);
  }

  function handleDataList() {
    console.log(err);
    if (activeTab === "shows") {
      return <ShowsList shows={result} err={err}/>;
    } else if (activeTab === "people") {
      return <PeopleList people={result} err={err}/>;
    } else if (activeTab === "showId") {
      return <ShowIdList showId={result} searchTerm={searchTerm} err={err} setIsCast={setIsCast} />;
    }
  }

  return (
    <>
      <Header />

      <SearchType handleTabChange={handleTabChange} />
      <SearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      {handleDataList()}

    </>
  );
}

export default App;
