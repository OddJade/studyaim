import axios from 'axios';

export const OvEdit = async(list) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/api/openvidu/session/${list.sessionId}`,
    {
        'sessionTitle':list.sessionTitle
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Authorization':'Basic T1BFTlZJRFVBUFA6c3R1ZHlhaW0='
        }
    }).then((response) => {console.log('succeess!')})
    .catch((response) => {console.log('Error!');})
};