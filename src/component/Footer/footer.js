import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Footer/footer.css';

const styles = {
    containerStyle: {
        backgroundColor: "smokeWhite"
    } 
}

function Footer() {
    return (
        <Container fluid style={styles.containerStyle}>
            <Row>
                <Col md={true}><hr /></Col>
            </Row>
            <Row>
                <Container>
                    <Row>
                        <Col md={true}>
                            <div>
                                <span>© 2020 GitHub, Inc.</span> {" "}
                                <span>Terms</span> {" "}
                                <span>Privacy</span> {" "}
                                <span>Security</span> {" "}
                                <span>Status</span> {" "}
                                <span>Help</span> {" "}
                                <span>Pricing</span> {" "}
                                <span>API</span> {" "}
                                <span>Training</span> {" "}
                                <span>Blog</span> {" "}
                                <span>About</span> {" "}
                                <span>Contact Githb</span> {" "}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default Footer;










