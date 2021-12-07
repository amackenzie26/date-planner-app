

export const createUser = (userData) => {
    return fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
}

export const authenticateUser = (userData) => {
    return fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
}

export const getAllSuggestions = () => {
    return fetch('/api/suggestion', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const getSuggestion = (id) => {
    return fetch(`/api/suggestion/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const createDate = (dateInfo) => {
    return fetch('/api/date', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dateInfo),
    });
}

export const getAllDates = () => {
    return fetch('/api/date', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

var yelpApiKey = "XGPJzdsArujs0a5GBLbAgRXVjA0Ht8qthqX-MLFDM0pckAYtxRSmRcJCodfZ9Yxk9WsRQt7Isno_i1ZOlRrlEDY7laqvOLzkb23nclEnir1HfZkyAPxi8jOkwAZfYXYx";
var currentLat;
var currentLon;

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

const showPosition = (position) => {
    currentLat = position.coords.latitude;
    currentLon = position.coords.longitude;
    console.log("Lat:" + currentLat + ", Lon:" + currentLon);
}

export const getNearbyPlaces = (searchTerm) => {

    if (currentLat == null && currentLon == null) {
        getLocation();
    } else {
        var url =
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchTerm + "&latitude=" + currentLat + "&longitude=" + currentLon;

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + yelpApiKey,
            },
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    //displayNearbyPlaces(data.businesses);
                });
            }
        });
    }

}
