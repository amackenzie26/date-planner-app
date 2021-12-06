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