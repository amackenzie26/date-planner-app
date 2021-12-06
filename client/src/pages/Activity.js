import React, { useEffect, useState }  from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSuggestion } from '../utils/api';
import { Modal, Button } from "react-bootstrap";
import { validateEmail } from '../utils/helpers';
import { createDate } from '../utils/api';
import { formatDate } from '../utils/helpers';

const Activity = (props) => {
    const [suggestion, setSuggestion] = useState([]);
    let { id } = useParams();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dateInfo, setDateInfo] = useState({
        title: '',
        partnerEmail: '',
        message: '',
        activity: id,
        date: formatDate(new Date()),
    });

    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    useEffect(() => {
        const getSuggestionInfo = async () => {
            try {
                const res = await getSuggestion(id);

                if(!res.ok) {
                    throw new Error('No list of suggestions');
                }
                const suggestion = await res.json();
                setSuggestion(suggestion);
                console.log(suggestion);
            } catch (err) {
                console.error(err);
            }
        }

        getSuggestionInfo();
    }, [id])

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setDateInfo({ ...dateInfo, [name]: value })
    }

    const handleInputSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(dateInfo.partnerEmail)) {
            setErrorMessage('Email is invalid');
            return;
        }

        console.log(dateInfo);
        try {
            const res = await createDate(dateInfo);
            const date = await res.json();
            console.log(date);
            if (!res.ok) {
                console.log('error');
                throw new Error(`Couldn't create date`);
            }

            history.push('/dashboard')
        } catch (err) {
            console.error(err);
        }
        


    }

    return (
        <div>
            {!suggestion ? (
                <div>Loading...</div>
            ) : (
            <h1>{suggestion.name}</h1>
            )}

        <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
        >
        <Button variant="primary" onClick={handleShow}>
        Create Date
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send invitation to your date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label htmlFor="date-title" id="label-date-title">Date's title</label>
                <input 
                    className="date-title" 
                    id="date-title"
                    name="title"
                    type="text"
                    value={dateInfo.title}
                    onChange={handleInputChange}
                />

            <label htmlFor="date-email" id="label-date-email">Date's email</label>
            <input 
                className="date-email" 
                id="date-email"
                name="partnerEmail"
                type="email"
                value={dateInfo.partnerEmail}
                onChange={handleInputChange}
            />

            <label htmlFor="date-message" id="label-date-message">Message</label>
            <textarea 
                className="date-message" 
                id="date-message"
                name="message"
                value={dateInfo.message}
                onChange={handleInputChange}
            />

            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleInputSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        </div>

        
    );
}

export default Activity;