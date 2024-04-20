const API_URL = 'http://192.168.1.64:3000';

export const getActionsData = async () => {
    try {
        const response = await fetch(`${API_URL}/api/getActions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data
    } catch (error) {
        console.log(error)
    }
    
}

export const getEventsData = async () => {
    try {
        const response = await fetch(`${API_URL}/api/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const data = await response.json();
    return data
    } catch (error) {
        console.log(error)
    }
    
}