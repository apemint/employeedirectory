import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../SearchBar/SearchBar";
import EmployeeTable from "../EmployeeTable/EmployeeTable"


class Search extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
    };

    componentDidMount() {

        API.getUsers()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    results: res.data.results
                }))
            .catch((err) => console.log(err));
        ;
    }



    handleInputChange = (event) => {
        this.setState({
            search: event.target.value,
        })
        const { search, employees } = this.state;

        if (search === "") {
            return;
        } else {
            const results = employees.filter(user => user.name.first.toLowerCase().includes(search.toLowerCase()));
            this.setState({ results });
        }
    };

    handleSort = () => {
        const { results } = this.state;
        const sort = results.sort((a, b) => {
            if (a.name.first > b.name.first) { return 1 }
            else { return -1 }
        })
        this.setState({ results: sort })
    }

    handleRefresh() {
        window.location.reload();
    }

    render() {
        return (
            <div>
                <SearchBar
                    handleInputChange={this.handleInputChange}>
                </SearchBar>
                <EmployeeTable
                    results={this.state.results}
                    handleSort={this.handleSort}
                ></EmployeeTable>
            </div>
        )
    }
}

export default Search;