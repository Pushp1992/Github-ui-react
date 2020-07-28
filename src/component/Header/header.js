import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import homeImage from '../../assets/images/home.png';
import '../Header/header.css'


const styles = {
    containerStyle: {
        backgroundColor: "black",
        // height: '4rem'
    },
    colStyle: {
        height: '100px'
    },
    newsApiText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-block',
        marginTop: '20px'
    },
    newsText: {
        letterSpacing: '4px',
        padding: '5px 0 5px 6px',
        backgroundColor: "#1a73e8",
        boxSizing: 'border-box',
        fontFamily: 'NA Sans',
        fontSize: '2.25rem',
        color: 'white'
    },
    apiText: {
        letterSpacing: '4px',
        margin: '0, 3px 0 8px',
        padding: '5px 0 5px 6px',
        backgroundColor: "#fff",
        fontFamily: 'NA Sans',
        letterSpacing: '-1px',
        fontSize: '2.25rem',
        fontWeight: '500',
        color: '#1a73e8'
    },
    homeImageStyle: {
        width: '20px',
        height: '20px',
        marginTop: '30px'
    },
    svgStyle: {
        verticalAlign: 'middle !important',
        display: 'inline-block',
        fill: 'currentColor',
        color: '#fff',
        whiteSpace: 'nowrap',
        height: '32',
        width: '32',
    },
    searchInput: {
        padding: '1px',
        width: '20rem',
        color: 'white',
        backgroundColor: '#a3b5bb38',
    }
}

function Header() {
    return (
        <Container fluid style={styles.containerStyle}>
            <Row>
                <Col sm={1}>
                    <svg style={styles.svgStyle} height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </Col>
                <Col sm={3}>
                    <input style={styles.searchInput} type="text" placeholder="Search or jump to.." />
                </Col>
                <Col sm={5}>
                    <Nav style={styles.navItem} defaultActiveKey="/pullRequests" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link className="navLink" eventKey="pullRequest">Pull Requests</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="navLink" eventKey="Issues">Issues</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="navLink" eventKey="MarketPlace">MarketPlace</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className="navLink" eventKey="Explore">Explore</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;

