import React from 'react'
//Importerar komponenter från bootstrap
import { Navbar, Container } from 'react-bootstrap'
import { Intersect } from 'react-bootstrap-icons'
import './Nav.css'

const Nav = () => {
    return (
        //Använder färdigsydda komponenter från bootstrap
        <Container>
            <Navbar expand="xl" variant="light" >
                <Navbar.Brand>
                    <Intersect size={25} color="white" />
                    <span className="nav-title">Todo List</span>
                </Navbar.Brand>
            </Navbar>
        </Container>
    )
}
export default Nav