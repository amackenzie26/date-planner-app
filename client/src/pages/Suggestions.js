import React, { useState, useEffect } from 'react';
import { getAllSuggestions } from '../utils/api';
import Suggestion from '../components/Suggestion';

const Suggestions = (props) => {

    const [suggestionList, setSuggestionList] = useState([]);
    const [order, setOrder] = useState(0);


    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await getAllSuggestions();    
                if (!res.ok) {
                    throw new Error('No list of suggestions');
                }
                const suggestionList = await res.json();

                var randomSuggestions = [];

                if (props.location.state) {
                    console.log(props.location.state)
                    console.log(suggestionList)
                    for (let i = 0; i < suggestionList.length; i++) {
                        if (props.location.state.every(elem => suggestionList[i].characteristics.includes(elem))) {
                            randomSuggestions.push(suggestionList[i]);
                        }
                    }
                    for (var i = randomSuggestions.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = randomSuggestions[i];
                        randomSuggestions[i] = randomSuggestions[j];
                        randomSuggestions[j] = temp;
                    }
            
                    console.log(randomSuggestions);
                }
                setSuggestionList(randomSuggestions);
                
            } catch (err) {
                console.error(err);
            }
    
            
        }
        fetchData();
    }, []);

    
    const handleSuggestions = () => {
        if (order + 3 < suggestionList.length ) {
            setOrder(order + 3);
        } else {
            setOrder(0);
        }
        
    }

    return (
        <div>
        <div class="suggestion-container">
            { order < suggestionList.length  && <Suggestion sugg={suggestionList[order]} />}
            { order + 1 < suggestionList.length  && <Suggestion sugg={suggestionList[order + 1]} />}
            { order + 2 < suggestionList.length  && <Suggestion sugg={suggestionList[order + 2]} />}
        
        </div>
        <button class="btn btn-danger next-suggestion" onClick={handleSuggestions}>Next Suggestions</button>
    </div>
    )

}

export default Suggestions;