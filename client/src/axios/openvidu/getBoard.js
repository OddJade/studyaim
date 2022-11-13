import axios from 'axios';

export const OVGetBoard = async(sessionId) => {
    let list = {};
    await axios.get(`${process.env.REACT_APP_API_URL}/api/openvidu/session/${sessionId}`,
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