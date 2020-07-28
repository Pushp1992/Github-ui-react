import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { OverViewComponent, RepoComponent } from '../component';

import '../RightPanel/rightPanel.css'


const RightPanel = () => {
    const routes = [
        {
            path: "/overview",
            component: OverViewComponent
        },
        {
            path: "/repositories",
            component: RepoComponent,
        }
    ];

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


    return (
        <Router>
            <Container>
                <Row>
                    <Col>
                        <Nav variant="tabs" defaultActiveKey="/overview">
                            <Nav.Item>
                                <Nav.Link><Link to="/overview">Overview</Link></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/repositories"><Link to="/repositories">Repositories</Link></Nav.Link>
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

// return (
//     <Container>
//         <Row>
//             <Col>
//                 <NavBar />
//             </Col>
//         </Row>
//         <Row>
//             <Col>

//                <OverViewComponent />
//                <RepoComponent />

//             </Col>
//         </Row>
//     </Container>
// )

export default RightPanel;