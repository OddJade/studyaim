import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';

export const getReply = async(postId) => {
    let list = {};
    let send = [];
    await axios.get(`${process.env.REACT_APP_API_URL}/api/replies/${postId}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {list = response.data.replies})
    .catch((response) => {console.log('Error!');})

    for(let value in list)
    {
        send = send.concat([{
            replyId:list[value].replyId,
            replyContent:list[value].replyContent,
            userName:list[value].userInfo.userName
        }]);
    }

    return (send);
};