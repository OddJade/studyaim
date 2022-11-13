import axios from 'axios';

export const post = async(send) => { 
    const HOST = process.env.REACT_APP_API_URL;
    await axios.post(HOST + `/api/posts`,
    {
        "userName":send.userName, 
        "postTitle": send.postTitle, 
        "postContent": send.postContent, 
        "postType":send.postType
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {})
    .catch((response) => {console.log('Error!');})
};