import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Nav, Image } from 'react-bootstrap';
import GithubService from '../../utils/service';
import CustomToastr from '../../utils/toastr';
import '../LeftPanel/leftPanel.css'

const LeftPanel = () => {

    const [userInfo, setUserInfo] = React.useState({});

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        try {
            let response = await GithubService.getUserProfile()
            setUserInfo(response)
        } catch (err) {
            CustomToastr.warning(err)
        }
    }

    return (
        <Container>
            <Row>
                <Col sm={2}></Col>
                <Col>
                    <Image id="profileImageStyle" src={userInfo.avatar_url} roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        <span id="userName">{userInfo.name}</span>
                        <span id="userLogin">{userInfo.login}</span>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <div id="userBio">{userInfo.bio}</div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Button variant="outline-success" size="sm" block>Edit profile</Button>{' '}
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul id="userDetails">
                        <li>{userInfo.company ? userInfo.company : null}</li>
                        <li>{userInfo.location ? userInfo.location : null}</li>
                        <li>{userInfo.userDetails ? userInfo.userDetails : null}</li>
                        <li>{userInfo.blog ? userInfo.blog  : null}</li>
                        <li>@{userInfo.twitter_username ? userInfo.twitter_username : null}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default LeftPanel;