import React from 'react';
import styles from './mypage.module.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getmylist } from '../../../axios/userInfo/getmylist';
import PostReply from './postReply';

const MyList = () => {
    return (
        <div className={styles.container}>
            <h1>내가 쓴 글</h1>
            <PostReply menuType="myPosts"/>
            <h1>내가 쓴 답글</h1>
            <PostReply menuType="myReplies"/>
        </div>
    );
};

export default MyList;