import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import qs from 'query-string';
import { useEffect } from 'react';
import { GetToken } from '../../../axios/kako/getToken';
import { GetInfo } from '../../../axios/kako/getInfo';
import { useDispatch } from 'react-redux';
import { onlogin, userId } from '../../../redux/store';

const Kakoauth = (props) => {
    const location  = useLocation();
    const query = qs.parse(location.search);
    const [accessToken,setAccessToken] = useState();
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const onLogin = () => dispatch(onlogin());
    const userID = (id) => dispatch(userId(id));
    const [user,setUser] = useState({
        name:''
    });

    useEffect(() => {
        async function getAccessToken(){
            const data = await GetToken(query.code);
            if(data)
            {
                setAccessToken(data.access_token);
            }
            /*else
            {
                alert("잘못된 접근입니다.");
                navigator("/login");
            }*/
        }        
        getAccessToken();
    },[]);

    useEffect(() => {
        let data;
        async function getInfo(){
            const data = await GetInfo(accessToken);      
            console.log(data);
            let username = data.username;
            alert(`${username}님 안녕하세요.\n로그인이 성공적으로 되었습니다.`);
            onLogin();
            localStorage.setItem('user-token', data.token);
            userID(username);
            navigator("/");
        }
        if (accessToken !== undefined)
        {
            getInfo();
        }            
    },[accessToken]);

    return (
            <div>
                {accessToken?<></>:<p>로그인중입니다.</p>}
            </div>
    );
};

export default Kakoauth;