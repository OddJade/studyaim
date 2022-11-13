import axios from 'axios';

export const GetToken = async(code) => { 
    let data;
    await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=d9a87ff60b8dbb5c22eaf114ed0f30d4&redirect_uri=http://studyaim.ml/kakao/oauth&code=${code}&client_secret=Ygd1pmN88vehqlCaHtnROsrp507YwTJ8`,
    {

    },
    {
        headers:{
            'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8',
        }
    }).then((response) => {data = response.data})
    .catch((response) => {data = false})
    return data;
};