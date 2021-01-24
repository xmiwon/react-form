import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Nav from '../Nav/Nav'
import Form from '../Form/Form'
import List from '../List/List'


const Main = () => {
    const [items, setItems] = useState([])

    return (
        //Använder react bootstrap för att designa layout
        <Container>  
        <Row>
        <Nav />
            <Col md={6}>
                <Form items={items} setItems={setItems} />         
            </Col>
            <Col>
                <List items={items} setItems={setItems}/>              
            </Col>
        </Row>
        </Container>
    )
}

export default Main