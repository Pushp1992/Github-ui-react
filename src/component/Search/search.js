import React, { Component } from 'react';
import { Row, Col, Container, Button, Form, DropdownButton, Dropdown } from "react-bootstrap";
import { Types, Language } from '../../utils/utils';
import CardComponent from '../Cards/card';
import CustomToastr from '../../utils/toastr';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: '',
            selectedRepoType: 'all',
            selectedLangType: 'all',
            repoType: [],
            langType: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.setState({
            repoType: Types,
            langType: Language
        })
    }

    handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }

    passSearchValue(event) {
        event.preventDefault();

        if (event.key === 'Enter') {
            if (this.state.searchValue === "") {
                CustomToastr.warning("Please provide search input");
                return;
            }
        }
    }

    handleSelect = (event) => {
        event.preventDefault();

        if (event.currentTarget.name === "repoType") {
            this.setState({ selectedRepoType: event.currentTarget.id })
            console.log(event.currentTarget.id)
        }

        if (event.currentTarget.name === "langType") {
            this.setState({ selectedLangType: event.currentTarget.id })
            console.log(event.currentTarget.id)
        }
    }

    render() {
        const searchInput = this.state.searchValue;
        const repoType = this.state.selectedRepoType;
        const langType = this.state.selectedLangType;
        return (
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <Form.Control type="text" name='searchValue' value={this.state.searchValue}
                            onChange={this.handleInputChange} onKeyUp={(e) => this.passSearchValue(e)} placeholder="Find a repository" />
                    </Col>
                    <Col xs="auto">
                        <DropdownButton id="repo-type" title={`Type: ${repoType}`}>
                            {
                                this.state.repoType.map(data => {
                                    return (
                                        <Dropdown.Item key={data.value} name="repoType" id={data.value} eventKey={data.value}
                                            onClick={this.handleSelect} active={data.value === repoType ? true : false}>{data.label}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Col>
                    <Col xs="auto">
                        <DropdownButton id="lang-type" title={`Language: ${langType}`}>
                            {
                                this.state.langType.map(data => {
                                    return (
                                        <Dropdown.Item key={data.value} name="langType" id={data.value} eventKey={data.value}
                                            onClick={this.handleSelect} active={data.value === langType ? true : false}>{data.label}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Col>
                    <Col xs="auto">
                        <Button variant="success">New</Button>{' '}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        {/* Child component */}
                        <CardComponent data={{searchInput, repoType, langType}} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchBar;