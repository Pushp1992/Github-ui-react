import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../Search/search';
import '../Repositories/repositories.css'

const Repositories = () => {
    return (
        <Container fluid>
            <br />
            <Row>
                <Col>
                    <SearchBar />
                </Col>
            </Row>
        </Container>
    )
}

export default Repositories;