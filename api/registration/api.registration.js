import axios from 'axios';
const API_URL = 'http://192.168.1.64:3000';
export const registration = async (userdata) => {
    console.log(userdata)
    try {
        const response = await fetch(`${API_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...userdata})
        });
        console.log(response)
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
    }
}

