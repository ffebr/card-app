const API_URL = 'http://192.168.1.64:3000';

export const getUserData = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/api/user/${userId}`, {
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

export const editUserData = async (userId, userData) => {
    console.log(userData)
    const { first_name , patro , last_name , birth , polic } = userData
    try {
        const response = await fetch(`${API_URL}/api/useredit/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name , patro , last_name , birth , polic }),
        params: userId
    });
    const data = await response.json();
    return data
    } catch (error) {
        console.log(error)
    }
}