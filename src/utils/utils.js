import axios from "axios";

export default function getData(activeTab, searchTerm, isCast) {
  const searchApi = axios.create({ baseURL: "https://api.tvmaze.com" });
  let fetchDetails;
  let url = "";
  if (activeTab === "people" || activeTab === "shows") {
    fetchDetails = searchApi.get(`/search/${activeTab}?q=${searchTerm}`);
  } else if (activeTab === "showId") {
    url += `/shows/${searchTerm}`;
    if (isCast) {
      url += `?embed=cast`;
    }
    fetchDetails = searchApi.get(url);
  } else {
    Promise.reject("Can't load this data for you");
  }

  return fetchDetails.then((response) => {
    return response.data;
  });
}
