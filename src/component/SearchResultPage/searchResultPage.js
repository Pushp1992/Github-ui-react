// Display the content of search result  here

import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";

// Custom component Import
import NewsService from '../../utils/service';
import CustomToastr from '../../utils/toastr';
import CardComponent from '../Cards/card';
import { HeaderComponent, FooterComponent } from '../component';

class SearchResultPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
            searchResultData: [],
        }
    }

    componentDidMount() {
        let searchInput = this.props.location.state.searchInput;
        this.getSearchResultData(searchInput)
    }

    getSearchResultData = async (searchInput) => {
        try {
            let response = await NewsService.getSearchResult(searchInput);
            this.setState({ loader: true })

            if (response && response.articles.length !== 0) {
                this.setState({ searchResultData: response.articles, loader: false });
                CustomToastr.success(`Yay ! Fetched ${response.totalResults} results for you.`)
            } else {
                this.setState({ loader: false });
                CustomToastr.warning(`unable to fetch news feed for country : ${searchInput}`)
            }
        } catch (err) {
            this.setState({ loader: false })
            CustomToastr.error(err || 'Something unexpected happen');
        }
    }

    render() {
        let searchResultList = this.state.searchResultData;
        let loaderStatus = this.state.loader;
        return (
            <Container fluid>
                <Row>
                    <HeaderComponent />
                    <Container>
                        {
                            loaderStatus ? <div>Hold tight, while we are getting latest result for you</div> : null
                        }
                        {
                            searchResultList.length !== 0 ?
                                <Row>
                                    {
                                        searchResultList.map(data => {
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
                                    <h2 style={{marginTop:'6rem'}}>Hold tight, while we are getting latest result for you.</h2>
                                </div>
                        }
                    </Container>
                    <FooterComponent />
                </Row>
            </Container>
        )
    }
}

export default SearchResultPage;