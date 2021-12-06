import React from 'react';
import { Card, Button } from "react-bootstrap";

const Date = (props) => {

    return (
        <div class="card date-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.message}
                </Card.Text>
                <Button variant="primary">Check</Button>
            </Card.Body>
        </div>
    )
}

export default Date;                                                                                                                                                                  