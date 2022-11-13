import axios from 'axios';

export const GetInfo = async(ACCESS_TOKEN) => { 
    let data = JSON.stringify({accessToken:ACCESS_TOKEN});
    const host = process.env.REACT_APP_API_URL;
    await axios.post(`${host}/api/auth/kakao/callback`, data,
    {
        headers:{
            'Content-type' : 'application/json',
        },
    }).then((response) => {localStorage.setItem('user-token', response.data.token);
    data = response.data})
    .catch((response) => {console.log(response)})
    return data;
};