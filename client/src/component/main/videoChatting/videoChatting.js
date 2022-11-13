import React from 'react';
import styles from './videoChatting.module.css';

const VideoChatting = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>방이름</p>
                <button>나가기</button>
            </div>
            <div className={styles.video}>
                <p>화상화면장소</p>
            </div>
            <div className={styles.chatting}>
                <p>채팅</p>
            </div>
            <div className={styles.sub}>
                <p>서브</p>
            </div>             
            <div className={styles.write}>
                <textarea placeholder="메세지 보내기"></textarea>
                <button>보내기</button>
            </div>
        </div>
    );
};

export default VideoChatting;