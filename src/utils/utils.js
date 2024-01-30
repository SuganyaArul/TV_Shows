import axios from 'axios';

export default function getData(searchShows,searchPeople){
    console.log(searchPeople,'searchPeople');
    const searchApi= axios.create({baseURL: 'https://api.tvmaze.com/search'});
    let fetchDetails=''

    if(searchShows!==null)
    {
    fetchDetails= searchApi.get(`/shows?q=${searchShows}`)
    }

    else if(searchPeople!==null)
    {
        fetchDetails= searchApi.get(`/people?q=${searchPeople}`)
    }

    

    return fetchDetails.then((response) => {
        console.log(fetchDetails,'url');
        console.log(response,'>>>response');
      return response.data
    })
}
