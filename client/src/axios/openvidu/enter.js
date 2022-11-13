import axios from 'axios';

export const Enter = async(sessionId) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/api/openvidu/session/${sessionId}/enter`,
    {

    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization':'Basic T1BFTlZJRFVBUFA6c3R1ZHlhaW0='
        }
    }).then((response) => {console.log("현재인원 : " +  response.data.numConnectedObject + '명입니다.')})
    .catch((response) => {console.log('Error!');})
};