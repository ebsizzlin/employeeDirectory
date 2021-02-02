//import
import React from "react";
//import utils api
import API from "../utils/api.js"
//import search
import Search from "./searchBar"
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

    //sort by phone
    sortByPhone = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
          if (b.phone > a.phone) {
            return -1
          }
          if (a.phone > b.phone) {
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

    //sort by email
    sortByEmail = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
          if (b.email > a.email) {
            return -1
          }
          if (a.email > b.email) {
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

    //sort by dob
    sortByDOB = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
          if (b.dob.date > a.dob.date) {
            return -1
          }
          if (a.dob.date > b.dob.date) {
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
    render() {
        return (
          <div>
            <Search handleInputChange={this.handleInputChange}
              search={this.state.search} />
    
            <div className="table-responsive">
            <table className="table table-striped table-resposive text-center table-hover">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>First Name <span className="downArrow" onClick={this.sortByFName}></span></th>
                    <th>Last Name <span className="downArrow" onClick={this.sortByLName}></span></th>
                    <th>Phone <span className="downArrow" onClick={this.sortByPhone}></span></th>
                    <th>Email <span className="downArrow" onClick={this.sortByEmail}></span></th>
                    <th>DOB <span className="downArrow" onClick={this.sortByDOB}></span></th>
                  </tr>
                </thead>

                { //first name
                this.state.results && this.state.results.map(item =>
                    item.name.first.toLowerCase().includes(this.state.search) ?
                        <tbody key={item.login.uuid}>
                            <tr>
                            <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                <td >{item.name.first}</td>
                                <td >{item.name.last}</td>
                                <td >{item.phone}</td>
                                <td >{item.email}</td>
                                <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                            </tr>
                        </tbody>

                    :
                    //last name
                    item.name.last.toLowerCase().includes(this.state.search) ?
                        <tbody key={item.login.uuid}>
                            <tr>
                            <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                <td >{item.name.first}</td>
                                <td >{item.name.last}</td>
                                <td >{item.phone} </td>
                                <td >{item.email}</td>
                                <td>{DateFormat(item.dob.date, "mediumDate")}</td>  
                            </tr>
                        </tbody>
                    :
                    null
                )}
          </table>
        </div>
      </div>
    )
  }
}


//export
export default Table;