import React from 'react';
import { Card, Button } from "react-bootstrap";

const Date = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.message}
                </Card.Text>
                <Button variant="primary">Check</Button>
            </Card.Body>
        </Card>
    )
}

export default Date;                                                                                                                                                                  