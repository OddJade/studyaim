import axios from 'axios';

export const put = async(user) => {
    let success = false;
    await axios.put(`${process.env.REACT_APP_API_URL}/api/account/register`,
    {
        "userName": user.name,
        "userPassword": user.password,
    },
    {
        headers:{
            'Content-type' : 'application/json',
        }
    }).then((response) => {console.log(response.data); success = true})
    .catch((response) => {console.log(response);});
    return success;
};