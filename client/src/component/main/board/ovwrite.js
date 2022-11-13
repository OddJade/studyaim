import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import { post } from '../../../axios/openvidu/post';
import styles from './write.module.css'
import { useNavigate } from 'react-router-dom';

const Ovwrite = (props) => {

    const navigate = useNavigate();
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));

    const [use,setUse] = useState({
        userName:"",
        postTitle:"",
    });
    
    const onchange = e =>{
        const {name, value} = e.target;
        setUse({
            ...use,
            [name]:value,
            userName:userId,
        })
    }

    const usePost = async(e) => {
        e.preventDefault();
        await post(use);
        alert("글쓰기가 완료되었습니다.");
        navigate(`/board/studyRoom`);
    }

    return (
        <div className={styles.App}>
            <h1></h1>
            <form onSubmit={usePost}>
                <div className={styles.form_wrapper}>
                <input className={styles.title_input} type='text' name="postTitle" onChange={(e)=>onchange(e)} placeholder='제목' />
                </div>
                <button className={styles.submit_button} type="submit">입력</button>
            </form>
      </div>
    );
};

export default Ovwrite;