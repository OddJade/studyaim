import axios from 'axios';

export const OVDelete = async(sessionId) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/openvidu/session/${sessionId}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization':'Basic T1BFTlZJRFVBUFA6c3R1ZHlhaW0='
        }
    }).then((response) => {console.log('succeess!')})
    .catch((response) => {console.log('Error!');})
};