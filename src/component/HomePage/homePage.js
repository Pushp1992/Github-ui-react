// All the view component are integrated Headers.

import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";

// Custom component Import
import {
    HeaderComponent, FooterComponent,
    LeftPanelComponent, RightPanelComponent
} from '../component';


const HomePage = () => {
    return (
        <Container fluid>
            <Row>
                <HeaderComponent />
            </Row>
            <Row>
                <Col>
                    <LeftPanelComponent />
                </Col>
                <Col>
                    <RightPanelComponent />
                </Col>
            </Row>
            <Row>
                <FooterComponent />
            </Row>
        </Container>
    )
}

export default HomePage;