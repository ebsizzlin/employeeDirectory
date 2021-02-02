//import
import React from "react";
//import utils api
import API from "../utils/api.js"
//import search
import Search from "../components/searchBar"
//import styles
import "../styles/table.css"

//npm DateFormat???
import DateFormat from 'dateformat';

class Table extends React.Component {

    state = {
        sortOrder: "",
        results: [],
        search: ""
    }

    //api call randomuser
    componentDidMount() {
        API.ApiSearch()
        .then(res => {
            this.setState({ results: res.data.results })
            console.log(this.state.results)
        }).catch(err => console.log(err))
    }

//handle input searchbar

//sort by first

//sort by last

//render JSX func

//export