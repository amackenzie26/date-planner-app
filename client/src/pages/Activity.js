import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { getSuggestion } from '../utils/api';
import { Modal, Button } from "react-bootstrap";

const Activity = (props) => {
    const [suggestion, setSuggestion] = useState([]);
    let { id } = useParams();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dateInfo, setDateInfo] = useState({
        email: '',
        message: '',
    });

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
      <form class="form">
        <Modal.Header closeButton>
          <Modal.Title>Send invitation to your date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <label for="date-email" id="label-date-email">Date's email</label>
            <input 
                class="date-email" 
                id="date-email"
                name="email"
                type="email"
                value={dateInfo.email}
                onChange={handleInputChange}
            />

            <label for="date-message" id="label-date-message">Message</label>
            <textarea 
                class="date-message" 
                id="date-message"
                name="message"
                value={dateInfo.message}
                onChange={handleInputChange}
            />
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
      </div>
        </div>

        
    );
}

export default Activity;