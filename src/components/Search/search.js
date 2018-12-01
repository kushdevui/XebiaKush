import React, { Component } from 'react';
import Header from '../Home/Header/header';
import {Container,FormGroup,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { base_url , Search } from '../../config';
import axios from 'axios';
import './search.css';

class SearchPlanet extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state={
            search:"",
            searchResults:[],
            err:''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
   
    logout(){
        localStorage.removeItem('userId');
        this.setState({
            redirectToReferrer : false
        })
    }



    renderSearch(){
        return this.state.searchResults.map((item,i)=>{
            // const fontSize = item.population
            // const style = {
            //     fontSize:fontSize
            // }
            // console.log(fontSize);
            if(item.population)
            return <div>
                        <Row>
                            <Col lg={12}>
                                <h1 style={style}>{item.name}</h1>
                                <p>Roatation Period - {item.rotation_period}</p>
                                <p>Orbital Period - {item.orbital_period}</p>
                                <p>Diameter - {item.diameter}</p>
                                <p>climate - {item.climate}</p>
                                <p>Created - {item.created}</p>
                                <p>Gravity - {item.gravity}</p>
                                <p>Population - {item.population}</p>
                                <p>Surface Water - {item.surface_water}</p>
                                <p>Terrain - {item.terrain}</p>
                            </Col>
                        </Row>
                    </div>
        })
    }


    handleSearch(event){
        this.setState({
            search: event.target.value
        })

        axios.get(base_url + Search + this.state.search).then((response)=>{
            console.log(response);
            if(response.data.results.length){
                this.setState({
                    searchResults:response.data.results
                })
            }
            else{
                this.setState({
                    err:"no records Found"
                })
            }
        })
    }

    render(){
        console.log(this.state.searchResults);
        return(
            <div>
                <Header/>
                <Container>
                    <FormGroup className="search">
                        <Col lg={6}>
                            <label>Search for Planet</label>
                            <input type="text" value={this.state.search} onChange={this.handleSearch} className="form-control inputtext" name="planet_search" />
                        </Col>
                    </FormGroup>
                    {this.renderSearch()}

                </Container>
            </div>
        )
    }
   
}

export default SearchPlanet;

