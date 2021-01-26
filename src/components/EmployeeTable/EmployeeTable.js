import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Table } from 'react-bootstrap'


function EmployeeTable(props) {
    return (
        <div className="SearchResults">
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th><button className="sortBtn" onClick={props.handleSort}>Sort</button></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>State</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {props.results.map(result => (
                            <tr key={result}>
                                <td>
                                    <img
                                        src={result.picture.thumbnail}
                                        className="userPhoto" alt={result.name.first}
                                    />
                                </td>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.location.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default EmployeeTable;