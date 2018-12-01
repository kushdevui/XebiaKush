import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
//importing style
import './header.css';

class Header extends Component   {  
    render(){
        return (
            <Container fluid>
                <Row >
                    <Col lg={12} className="header">
                        <a href="/">Logout</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header;