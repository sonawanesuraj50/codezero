import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  logoIcon: {
      paddingLeft:200,
      color: '#335eea !important',
  },

}));

function NavbarComponent() {
    const classes = useStyles();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" className={classes.logoIcon}>LandKit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav defaultActiveKey="/home" as="ul" >
                    <Nav.Item style={{marginLeft:120}}>
                        <Nav.Link href="/home">Loadings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{marginLeft:25}}>
                        <Nav.Link eventKey="link-1">Pages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{marginLeft:25}}>
                        <Nav.Link eventKey="link-2">Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{marginLeft:25}}>
                        <Nav.Link eventKey="link-2">Documentation</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Button variant="primary" style={{marginLeft:250}}>Buy now</Button>
                </Navbar.Collapse>
                </Navbar>
        </>
    );
}


export default NavbarComponent;