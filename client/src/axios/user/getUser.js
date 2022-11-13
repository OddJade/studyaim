import axios from 'axios';

export const getUser = async(user) => {
    let success;
    const host = process.env.REACT_APP_API_URL;
    await axios.post(host + '/api/auth/authenticate',
    {
        "username": user.name,
        "password" : user.password,
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json'
        }
    }).then((response) => {localStorage.setItem('user-token', response.data.token);
    success = true;})
    .catch((response) => {console.log('Error!'); success = false;})
    return success;
};