import React, { Fragment } from 'react';
//BOOSTRAP COMPONENTS
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './header.css'

import logo from '../../logo.svg';

function Header(props) {

    console.log(props);
    return(
        <Fragment>
            <header>
                <Navbar bg={props.bgColor} variant="dark">
                    <Navbar.Brand>
                        <img  src={logo} alt="logo de react" />
                    </Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <span className="ms-auto px-4">
                        {props.userProp.name} {props.userProp.surname}
                    </span>
                </Navbar>
            </header>
        </Fragment>
    )
}

export default Header