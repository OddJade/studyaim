import axios from 'axios';

export const getTypelist = async(postId) => {
    let list = {};
    await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${postId}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {
        list = response.data; 
        list = {
        "postContent" : list['postContent'],
        "postTitle" : list['postTitle'],
        "userName" : list['userInfo']['userName']
    }})
    .catch((response) => {console.log('Error!');})

    return list;
};