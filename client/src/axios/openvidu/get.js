import axios from 'axios';

export const OVGet = async() => {
    let list = {};
    await axios.get(`${process.env.REACT_APP_API_URL}/api/openvidu/sessions`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization':'Basic T1BFTlZJRFVBUFA6c3R1ZHlhaW0='
        }
    }).then((response) => {list = response.data})
    .catch((response) => {console.log('Error!');})

    return (list);
};