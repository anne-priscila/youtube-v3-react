import axios from 'axios';

const SearchApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCOvKsCwXXI5IxQuJyo_BFnwCjIebR3hr4&access_token=oauth2-token&part=snippet&maxResults=10&q='
});

export default SearchApi;