const loginApi = 'http://127.0.0.1:8000/api/v1/login';
let loginUserData = null; 
const loginData = {
    username: '23',
    password: '123',
};

fetch(loginApi, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(newUserData => {
        loginUserData = newUserData
        console.log('New User Data:', newUserData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

console.log(loginUserData);