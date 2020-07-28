import React from "react";
import { Card } from 'react-bootstrap';

const CardComponent = ({ data }) => {
    return (
        <Card id="card-style">
            <Card.Img variant="top" src={data.urlToImage} />
            <Card.Body>
                <Card.Title className="cardTitle">
                    <Card.Link href={data.url} target="_blank">{data.title}</Card.Link>
                </Card.Title>
                <Card.Text className="cardText">{data.content}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{data.source.name}</small><br />
                <small className="text-muted">{data.publishedAt}</small>
            </Card.Footer>
        </Card>
    )
}

export default CardComponent;