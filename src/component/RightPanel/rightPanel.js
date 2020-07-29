import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { OverViewComponent, RepoComponent } from '../component';

import '../RightPanel/rightPanel.css'

const RouteWithSubRoutes = (route) => {
    return (
        <>
            <Route
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} />
                )}
            />
        </>
    );
};

const RightPanel = () => {
    const routes = [
        {
            path: "/",
            component: RepoComponent
        },
        {
            path: "/overView",
            component: OverViewComponent,
        }
    ];

    return (
        <Router>
            <Container>
                <Row>
                    <Col>
                        <Nav variant="tabs" defaultActiveKey="/">
                            <Nav.Item>
                                <Nav.Link eventKey="/"><Link to="/">Repositories</Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {/* <Nav.Link eventKey="/repositories"><Link to="/repositories">Overview</Link></Nav.Link> */}
                                <Nav.Link eventKey="/overView"><Link to="/overView">Overview</Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="projects">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="packages">Packages</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Switch>
                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}
                        </Switch>

                    </Col>
                </Row>
            </Container>
        </Router>
    )
}

export default RightPanel;