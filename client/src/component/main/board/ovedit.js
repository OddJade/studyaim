import {React, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { post } from '../../../axios/openvidu/post';
import styles from './write.module.css'
import { useNavigate } from 'react-router-dom';
import { OVGetBoard } from '../../../axios/openvidu/getBoard';
import { OVDelete } from '../../../axios/openvidu/delete';
import qs from 'query-string';

const Ovedit = (props) => {
    const query = qs.parse(window.location.search);
    const navigate = useNavigate();
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));

    const [use,setUse] = useState({
        userName:"",
        postTitle:"",
    });

    const [list, setList] = useState({
        sessionModerator:"",
        sessionTitle:"",
    });

    const onchange = e =>{
        const {name, value} = e.target;
        setUse({
            ...use,
            [name]:value,
            userName:userId,
        })
    }

    async function deleteData(){
        await OVDelete(query.sessionId)
        alert("해당 세션이 삭제되었습니다.");
        navigate(`/board/study`);
    }

    const onDelete = () => {
        deleteData();
    }

    const usePut = async(e) => {
        //await post(use);
        alert("글 수정이 완료되었습니다.");
        navigate(`/board/study`);
    }

    async function fectchData(){
        setList(
            await OVGetBoard(query.sessionId)
        );
    }

    useEffect(() => {
        fectchData();
    },[])

    return (
        <div className={styles.App}>
            <h1></h1>
            <form >
                <div className={styles.form_wrapper}>
                <input className={styles.title_input} type='text' name="postTitle" onChange={(e)=>onchange(e)} placeholder='제목' defaltValue={list.sessionTitle}></input>
                </div>
            </form>
            <button className={styles.submit_button}>수정하기</button> <button className={styles.submit_button} onClick={()=>onDelete()}>삭제하기</button>
            
      </div>
    );
};

export default Ovedit;