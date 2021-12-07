import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useParams, useHistory } from 'react-router-dom';
import { getLocation, getNearbyPlaces, getSuggestion } from '../utils/api';
import { Modal, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { validateEmail } from '../utils/helpers';
import { createDate } from '../utils/api';
import Auth from '../utils/auth';
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
        user: Auth.getUser().data._id,
        activity: id,
        date: new Date(),
    });

    const [errorMessage, setErrorMessage] = useState('');

    const history = useHistory();

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [locations, setLocations] = useState([]);

    useEffect(() => {

        const showPosition = (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude)
        }
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }

        const getLocations = async (lat, lon, suggestion) => {
            try {
                console.log(suggestion.term);
                const res = await getNearbyPlaces(lat, lon, suggestion.term);

                if (!res.ok) {
                    throw new Error('No nearby locations');
                }

                const locations = await res.json()

                console.log(locations);
                setLocations(locations.businesses)
            } catch (err) {
                console.error(err);
            }
        }

        const getSuggestionInfo = async () => {
            try {
                const res = await getSuggestion(id);

                if (!res.ok) {
                    throw new Error('No list of suggestions');
                }
                const suggestion = await res.json();
                setSuggestion(suggestion);
                console.log(suggestion);

                getLocations(latitude, longitude, suggestion);
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

        try {
            const res = await createDate(dateInfo);
            const date = await res.json();
            console.log(date);
            if (!res.ok) {
                console.log('error');
                throw new Error(`Couldn't create date`);
            }

            history.push('/dashboard');
        } catch (err) {
            console.error(err);
        }


    }

    return (
        <div>
            <div
                className="d-flex align-items-center justify-content-center flex-column"
            >
                <h1>{suggestion.name}</h1>

                <Button variant="primary" onClick={handleShow}>
                    Create Date
                </Button>

                <div class="map-location">
                    <ListGroup>
                    {locations.map(location => {
                        return <a href={location.url} target="_blank"><ListGroupItem class="collection-item">{location.price} {location.name} | {location.location.address1}, {location.location.city} | {location.rating} Rating | Phone: {location.phone}</ListGroupItem></a>
                    })}
                    </ListGroup>
                </div>

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

                        <div style={{
                            margin: 'auto',
                            display: 'block',
                            width: 'fit-content'
                        }}>
                        <label htmlFor="date" id="label-date">When is your date?</label>
                            <TextField
                                id="date"
                                label="Choose the date"
                                type="date"
                                name="date"
                                defaultValue="2021-12-07"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                 onChange={handleInputChange}

                            />
                        </div>

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