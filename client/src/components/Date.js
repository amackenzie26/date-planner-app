import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { getSuggestion } from '../utils/api';

const Date = (props) => {

    const [date, setDate] = useState(props.date);
    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        setDate(String(props.date).substring(0, 10))

        const getSuggestionInfo = async () => {
            try {
                const res = await getSuggestion(props.activity);

                if (!res.ok) {
                    throw new Error('No list of suggestions');
                }
                const suggestion = await res.json();
                setSuggestion(suggestion);
            } catch (err) {
                console.error(err);
            }
        } 
        
        getSuggestionInfo();
    }, [])
    return (
        <div class="card date-card" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/${suggestion.image}')`}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.message}
                    
                </Card.Text>
                {date && (
                    <Card.Text>
                        Date: {suggestion.name} on {date}
                    </Card.Text>
                )}
                
            </Card.Body>
        </div>
    )
}

export default Date;                                                                                                                                                                  