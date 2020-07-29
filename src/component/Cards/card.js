import React, { useEffect } from "react";
import GithubService from '../../utils/service';
import CustomToastr from '../../utils/toastr';
import { Row, Col, Container, Card, Button, Form, DropdownButton, Dropdown } from "react-bootstrap";

const styles = {
    title: {
        color: '#0366d6',
        textDecoration: 'none',
        boxSizing: 'border-box',
        fontWeight: '600',
        fontSize: '20px',
        wordBreak: 'break-word',
    },
    description1: {
        boxSizing: 'border-box',
        fontSize: '15px',
        color: 'rgb(0 0 0 / 81%)',
        textAlign: '-webkit-match-parent'
    },
    description: {
        boxSizing: 'border-box',
        fontSize: '12px',
        fontWeight: '2rem',
        color: 'rgb(0 0 0 / 69%)',
        textAlign: '-webkit-match-parent'
    }
}

const CardComponent = ({ data }) => {

    const [repoList, setRepoList] = React.useState([]);
    const [updatedRepoList, setUpdatedRepoList] = React.useState([]);

    useEffect(() => {
        getRepoList()
    }, [])

    const getRepoList = async () => {
        try {
            let response = await GithubService.getUserRepo();
            setRepoList(response)
        } catch (err) {
            CustomToastr.error(err || 'something not right')
        }
    }
    console.log("data", data)

    if (data !== undefined) {
        repoList.forEach(dat => {
            let repoListValues = Object.values(dat);

            Object.values(data).forEach(el => {
                if (repoListValues.includes(el)) {
                    updatedRepoList.push(dat)
                }
            })
        });
        console.log(updatedRepoList)
    }
    // setUpdatedRepoList(updatedRepoList);

    return (
        <Container>
            <Row>
                <Col>
                    {
                        repoList.map(data => {
                            return (
                                <>
                                    <Card id="card-style">
                                        <Card.Body>
                                            <div>
                                                <a href={data.html_url} target="_self"><span style={styles.title}>{data.name}</span></a>
                                            </div>
                                            <div><span style={styles.description1}>{data.description}</span></div>
                                            <div>
                                                <span style={styles.description}>{data.language}</span>
                                                <span style={styles.description}>{data.default_branch}</span>
                                                <span style={styles.description}>{data.updated_at}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default CardComponent;