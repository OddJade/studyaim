import axios from 'axios';

export const Exit = async(sessionId) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/api/openvidu/session/${sessionId}/exit`,
    {
        
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization':'Basic T1BFTlZJRFVBUFA6c3R1ZHlhaW0='
        }
    }).then((response) => {console.log(response)})
    .catch((response) => {console.log('Error!');})
};