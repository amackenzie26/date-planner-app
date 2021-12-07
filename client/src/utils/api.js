

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

export const getDate = (id) => {
    return fetch(`/api/date/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

var yelpApiKey = "WAmOXZL8Fj9kzmJyEkwV2b0K2UWB-KYwJYxxQX6DLn5fxc6FAcY0czcwMbXnW7iiq0-Y_H02S0b_MZEC28nynMizOY8GSdBQOxfTQk4Jg0RYGfataMUzii4hLYqvYXYx";

export const getNearbyPlaces = (currentLat, currentLon, searchTerm) => {

    console.log(currentLat)
    console.log(currentLon)
    console.log(searchTerm)
    var url ="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchTerm + "&latitude=" + currentLat + "&longitude=" + currentLon;

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + yelpApiKey,
        },
    })

}
