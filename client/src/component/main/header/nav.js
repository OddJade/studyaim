import React from 'react';
import styles from './nav.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const onclick = (ekind) => {
        if(localStorage.getItem('user-token') === null)
        {
            alert("로그인이 되어있지않습니다. 로그인해주세요.");
            navigate('/login');
        }
        else{
            navigate(`/board/${ekind}`);
        }
    }

    return (
        <div className={styles.container}>
            <p onClick={()=>onclick("studyRoom")}>스터디방</p>
            <p onClick={()=>onclick("STUDY")}>토익</p>
            <p onClick={()=>onclick("job")}>취업</p>
            <p onClick={()=>onclick("license")}>자격증</p>
        </div>
    );
};

export default Nav;