import axios from 'axios';

export const getmylist = async(userName, menuType) => {
    let send;
    await axios.get(`${process.env.REACT_APP_API_URL}/api/mypage/${userName}?menuType=${menuType}`,
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {send = response.data.postData; })
    .catch((response) => {console.log('Error!');})
    return send;
};