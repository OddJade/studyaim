import {React, useState} from 'react';
import { useSelector } from 'react-redux';
import { post } from '../../../axios/board/post';
import styles from './write.module.css'
import { useNavigate } from 'react-router-dom';

const Wrtie = (props) => {
    const {kind, ekind} = props;
    const navigate = useNavigate();
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));

    const [use,setUse] = useState({
        userName:"",
        postTitle:"",
        postContent:"",
        postType:""
    });
    
    const onchange = e =>{
        const {name, value} = e.target;
        setUse({
            ...use,
            [name]:value,
            userName:userId,
            postType:ekind
        })
    }

    const usePost = async(e) => {
        e.preventDefault();
        await post(use);
        alert("글쓰기가 완료되었습니다.");
        navigate(`/board/${ekind}`);
    }

    return (
        <div className={styles.App}>
            {console.log(userId)}
            <h1>{kind}</h1>
            <form onSubmit={usePost}>
                <div className={styles.form_wrapper}>
                <input className={styles.title_input} type='text' name="postTitle" onChange={(e)=>onchange(e)} placeholder='제목' />
                <textarea className={styles.text_area} name="postContent" onChange={(e)=>onchange(e)} placeholder='내용'></textarea>
                </div>
                <button className={styles.submit_button} type="submit">입력</button>
            </form>
      </div>
    );
};

export default Wrtie;