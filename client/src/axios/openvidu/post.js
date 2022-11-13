import axios from 'axios';

export const post = async(send) => { 
    const HOST = process.env.REACT_APP_API_URL;
    await axios.post(HOST + '/api/openvidu/session', 
    {
        "sessionTitle" : send.postTitle,
        "sessionModerator" : send.userName
    },
    {
        headers: {
            "Authorization" : "Basic T1BFTlZJRFVBUFA6c3R1ZHlhaW0=",
            "Content-Type" : "application/json",
        },
    }
    ).then(response => {
        console.log("create session", response);
    }).catch((response) => {console.log('Error!');});
}