import React, { useState } from 'react';
import styles from './body.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import qs from 'query-string';

const Body = () => {
    const location  = useLocation();
    const navigate = useNavigate();

    const onclick = (temp,e) => {
        e.preventDefault();
        navigate(`/mypage/${temp}`);
    }


    const query = qs.parse(location.pathname);
    return (
            <div className={styles.container}>
                <div className={styles.side}>
                    {location.pathname==="/mypage/info"?<><button onClick={(e)=>onclick("info",e)}>나의 정보</button>
                    <button onClick={(e)=>onclick("edit",e)}>회원 수정</button>
                    <button onClick={(e)=>onclick("myList",e)}>내가 쓴 글/답글</button></>:<></>}
                    {location.pathname==="/mypage/edit"?<><button onClick={(e)=>onclick("info",e)}>나의 정보</button>
                    <button onClick={(e)=>onclick("edit",e)}>회원 수정</button>
                    <button onClick={(e)=>onclick("myList",e)}>내가 쓴 글/답글</button></>:<></>}
                    {location.pathname==="/mypage/myList"?<><button onClick={(e)=>onclick("info",e)}>나의 정보</button>
                    <button onClick={(e)=>onclick("edit",e)}>회원 수정</button>
                    <button onClick={(e)=>onclick("myList",e)}>내가 쓴 글/답글</button></>:<></>}
                </div>           
                <Outlet/>  
                <div className={styles.side}>
                </div>
            </div>
            
    );
};

export default Body;