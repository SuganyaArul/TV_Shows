import { useEffect, useState } from "react";
import Header from "./Header";
import ShowsList from "./ShowsList";
import '../App.css';
import PeopleList from "./PeopleList";
import getData from "../utils/utils";
import SearchInput from "./SearchInput";

function App() {

  const [searchTerm,setSearchTerm] = useState('');
  const [result, setResult] =useState([]);
  const [activeTab, setActiveTab]= useState('shows');

  useEffect(() => {
    getData(activeTab,searchTerm).then((body) => {
      setResult(body);
    })
  }, [searchTerm,activeTab])

  function handleTabChange(tab){
    setSearchTerm('');
    setActiveTab(tab);
    setResult([])
  }
  return (<>
  <Header />

  <button onClick={()=>{handleTabChange('people')}}>
    Click to search People
    </button>
  <button onClick={()=>{handleTabChange('shows')}}>
      Click to search Shows
      </button>
  <SearchInput setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
  {
    activeTab === 'shows'?
    <ShowsList shows={result}  />:
    <PeopleList people={result}/>
  }
  </>)
}

export default App;
