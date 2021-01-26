import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,FormControl,InputGroup, Button} from 'react-bootstrap'

function SearchBar(props){
    return(
        <div className="searchbar">
            <Container className="searchForm">
            <InputGroup className="mb-3">
              <FormControl
                onChange={props.handleInputChange}
                placeholder="Search an Employee"
                className="inputFull"
              />
                  <InputGroup.Append>
                    <Button variant="secondary" onClick={props.handleRefresh}>Search</Button>
                  </InputGroup.Append>
            </InputGroup>
            </Container>
        </div>
    )
}

export default SearchBar;