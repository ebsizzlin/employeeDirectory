import axios from "axios";
const url = 'https://randomuser.me/api/?results=30';

function ApiSearch() {
    return axios.get(url)
}
const myObject = {
    ApiSearch: ApiSearch
}

//api call
export default myObject