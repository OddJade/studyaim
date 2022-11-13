import React, { useState } from 'react';
import styles from './member.module.css'
import * as Put from '../../../axios/user/put';
import { useNavigate } from "react-router-dom";

const Member = () => {
    const navigate = useNavigate();

    const [user,setUser] = useState({
        name:'',
        password:''
    });

    const onchange = e =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const userPost = async(e) => {
        e.preventDefault(); 
        const put = await Put.put(user)
        if(user.password === user.repassword)
        {
            if(put){
                setUser({name:'', password:''});
                alert("축하합니다 회원가입이 정상적으로 처리되었습니다.");
                alert("로그인을 해주세요.");
                navigate("/login");
            }
            else{
                alert("중복된 아이디가 있습니다.");
            }           
        }else
            alert("비밀번호가 일치하지 않습니다.");
    }

    
    
    return (
        <div className={styles.member}>
            <form onSubmit={userPost}>
                <div>
                    <label htmlFor="user-id">아이디</label><br/>
                    <input type="text" name="name" onChange={(e)=>onchange(e)}/>
                </div>

                <div>
                    <label htmlFor="user-password">비밀번호</label><br/>
                    <input name="password" type="password" onChange={(e)=>onchange(e)}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label><br/>
                    <input name="repassword" type="password" onChange={(e)=>onchange(e)}/>
                </div>
                <div>
                    <input type="checkbox" name="user-term" />동의합니까?
                </div>
                <div style={{marginTop:10}}>
                    <button type="submit">가입하기</button>
                </div>
            </form>
        </div>
    );
};

export default Member;