import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { formatDate } from '../utils/helpers';

const Date = (props) => {

    const [date, setDate] = useState(props.date)
    useEffect(() => {
        setDate(String(props.date).substring(0, 10))
    }, [])
    return (
        <div class="card date-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.message}
                    
                </Card.Text>
                {date && (
                    <Card.Text>
                        {date}
                    </Card.Text>
                )}
                
            </Card.Body>
        </div>
    )
}

export default Date;                                                                                                                                                                  