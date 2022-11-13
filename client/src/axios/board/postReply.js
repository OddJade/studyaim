import axios from 'axios';

export const postReply = async(preply, postId) => { 
    await axios.post(`${process.env.REACT_APP_API_URL}/api/replies/${postId}`,
    {
        "userName":preply.userName, 
        "replyContent":preply.replyContent
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {})
    .catch((response) => {})
};