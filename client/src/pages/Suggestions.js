import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllSuggestions } from '../utils/api';

const Suggestions = (props) => {

    const [suggestionList, setSuggestionList] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await getAllSuggestions();    
                if (!res.ok) {
                    throw new Error('No list of technologies');
                }
                const suggestionList = await res.json();
                setSuggestionList(suggestionList);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    

    if (props.location.state) {
        console.log(props.location.state);
    }
    return (
        <div class="suggestion-container">


        </div>
    )

}

export default Suggestions;