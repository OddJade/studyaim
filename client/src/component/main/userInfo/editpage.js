import React from 'react';
import styles from './mypage.module.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { editInfo } from '../../../axios/userInfo/editInfo';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
    const navigate = useNavigate();
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));
    const [user, setUser] = useState(
        {
            name:userId,
            password:""
        }
    );

    const edit = async(e) => {
        e.preventDefault();
        if (await editInfo(user)){
            alert("성공적으로 변경되었습니다. 다시 로그인해주세요");
            localStorage.removeItem('user-token');
            navigate('/');
        }
        else
            alert("잘못된 접근입니다.");
    }

    const onchange = e =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    return (
        <div className={styles.container}>
            <h1>회원 정보 수정</h1>
            <div><label className={styles.name} htmlFor="cheese">이름 : </label><input className={styles.title_input} type='text' name="name" placeholder='이름 입력' onChange={(e) => onchange(e)} value={user.name} readOnly/><br/>
            <label htmlFor="cheese"> 비밀번호 : </label><input className={styles.title_input} type='password' name="password" placeholder='비밀번호 입력' onChange={(e) => onchange(e)} value={user.password}/><br/>
            <button onClick={e => edit(e)}>보내기</button></div>
        </div>
    );
};

export default EditPage;