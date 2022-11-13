import axios from 'axios';

export const editInfo = async(user) => {
    let success = false;
    await axios.put(`${process.env.REACT_APP_API_URL}/api/users/modify`,
    {
        "userName": user.name,
        "userPassword" : user.password,
    },
    {
        headers:{
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('user-token')}`
        }
    }).then((response) => {localStorage.setItem('user-token', response.data.token); success = true})
    .catch((response) => {console.log('Error!'); })
    return success
};