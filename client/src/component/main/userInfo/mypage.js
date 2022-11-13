import React from 'react';
import styles from './mypage.module.css'
import { useSelector } from 'react-redux';

const Mypage = () => {
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));


    return (
        <div className={styles.container}>
            <h1>나의 정보</h1>
            <div><label htmlFor="cheese"> 이름 : </label><input className={styles.title_input} type='text' name="postTitle" placeholder='제목' value={userId} readOnly/><br/></div>
        </div>
    );
};

export default Mypage;