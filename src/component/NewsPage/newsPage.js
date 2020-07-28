// Getting all the news feed and display in this component

import React, { Component } from 'react';
import { Row, Col, Container, CardGroup, Card, CardColumns } from "react-bootstrap";
import {withRouter} from 'react-router-dom';

// custom import
import NewsService from '../../utils/service';
import CustomToastr from '../../utils/toastr';
import CardComponent from '../Cards/card';
import '../NewsPage/newsPage.css';

class NewsFeedPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
            newsFeedLists: [],
            country: 'us',
            increment: 0
        }
    }
    componentDidMount() {
        // this.getNewsByCountryName(this.state.country);
    }
    async getNewsByCountryName(country) {
        try {
            let response = await NewsService.getNewsByCountry(country);
            this.setState({ loader: true })

            if (response && response.articles.length !== 0) {
                this.setState({ newsFeedLists: response.articles, loader: false });
                CustomToastr.success(`Yay ! Fetched ${response.totalResults} News Feed for you.`)
            } else {
                this.setState({ loader: false });
                CustomToastr.warning(`unable to fetch news feed for country : ${country}`)
            }
        } catch (err) {
            this.setState({ loader: false })
            CustomToastr.error(err || 'Something unexpected happen');
        }

    }
    func1() {
        this.setState({increment: this.state.increment +1})
    }
    render() {
        let newsList = this.state.newsFeedLists;
        let loaderStatus = this.state.loader;
        return (
            <Container id="parent-view">
                <h1>button</h1>
        <button onClick={() => this.func1()}>clicked {this.state.increment}</button>
                {
                    loaderStatus ? <div style={{height:'100px'}}>Hold tight, while we are getting latest byte for you</div> : null
                }
                {
                    newsList.length !== 0 ?
                        <Row>
                            {
                                newsList.map(data => {
                                    return (
                                        <Col key={data.source.id} md="4">
                                           <CardComponent data={data} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        :
                        <div style={{height:'20rem'}}>
                            <h2 style={{marginTop:'6rem'}}>Hold tight, while we are getting latest byte for you</h2>
                        </div>
                }
            </Container>
        )
    }
}

export default withRouter(NewsFeedPage);