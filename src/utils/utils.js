import axios from 'axios';

export default function getData(activeTab,searchTerm){
   
    const searchApi= axios.create({baseURL: 'https://api.tvmaze.com'});
    
     const fetchDetails = searchApi.get(`/search/${activeTab}?q=${searchTerm}`);
    
    
    return fetchDetails
      .then((response) => {
        
        return response.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        throw error;
      });
}


