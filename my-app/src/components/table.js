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
    handleInputChange = event => {
        if (event.target.name === "search") {
          const searchTerm = event.target.value.toLowerCase();
          this.setState({
            search: searchTerm
          })
        }
    }

    //sort by first
    sortByFName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
          if (b.name.first > a.name.first) {
            return -1
          }
          if (a.name.first > b.name.first) {
            return 1
          }
          return 0;
        });
    
        if (this.state.sortOrder === "DESC") {
          sortedEmployees.reverse();
          this.setState({ sortOrder: "ASC" });
        } else {
          this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortedEmployees })
    }    

    //sort by last
    sortByLName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
          if (b.name.last > a.name.last) {
            return -1
          }
          if (a.name.last > b.name.last) {
            return 1
          }
          return 0;
        });
        if (this.state.sortOrder === "DESC") {
          sortedEmployees.reverse();
          this.setState({ sortOrder: "ASC" });
        } else {
          this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortedEmployees })
    }

    //render JSX func

//export