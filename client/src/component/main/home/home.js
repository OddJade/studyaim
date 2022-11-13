import React from 'react';
import styles from './home.module.css';
import study from '../../../img/study.png';

const Home = () => {
    return (
        <div className={styles.center}>
                {/*<div className={styles.box}>
                    할일 리스트
                    <div className={styles.list}>
                        <p className={styles.topic}>오늘 공부한 시간 / 오늘 목표한 시간</p>
                        <p>0시간 0분 / 10시간 30분</p>
                        <br/>
                        <p className={styles.topic}>오늘의 목표</p>
                        <p>프로그래밍 코딩하기</p>
                    </div>
                </div>*/}
                <div className={styles.box}>
                    인기 스터디방
                    <br/>
                    <div className={styles.poproom}>
                    <p><img style={styles.imagestyle} alt="study" src={study} /></p>
                        <p className={styles.name}>둘만의 독서방</p>    
                    </div>
                    <div className={styles.poproom}>
                    <p><img style={styles.imagestyle} alt="study" src={study} /></p>
                        <p className={styles.name}>취업 뽀개기!</p>
                    </div>
                    <div className={styles.poproom}>
                    <p><img style={styles.imagestyle} alt="study" src={study} /></p>
                        <p className={styles.name}>토익 & 스피킹</p>
                    </div>             
                </div>
                <div className={styles.box}>
                    관심 스터디방
                    <br/>
                    <div className={styles.poproom}>
                    <p><img style={styles.imagestyle} alt="study" src={study} /></p>
                        <p className={styles.name}>둘만의 독서방</p>
                    </div>
                    <div className={styles.poproom}>
                    <p><img style={styles.imagestyle} alt="study" src={study} /></p>
                        <p className={styles.name}>자격증 취득방</p>
                    </div>
                </div>
        </div>
    );
};

export default Home;