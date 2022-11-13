import {React, useState} from 'react';
import { getTypelist } from '../../../axios/board/getTypelist';
import styles from './getlist.module.css'
import { getReply } from '../../../axios/board/getReply';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { postReply } from '../../../axios/board/postReply';
import { delReply } from '../../../axios/board/delReply';
import { editPost } from '../../../axios/board/editPost';
import { delPost } from '../../../axios/board/delpost';
//import { editReply } from '../../../axios/board/editReply';
import qs from 'query-string';

const GetList = () => {
    const location  = useLocation();
    const query = qs.parse(location.search);
    const { postId } = useSelector(state => ({
        postId:state.postId
    }));
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));
    const navigate = useNavigate();
    const [list, setList] = useState({
        postTitle: "",
        postContent: "",
        userName: ""
    });
    const [preply,setPreply] = useState({
        userName : userId,
        replyContent : ""
    });
    const [reply, setReply] = useState([[]]);

    const editClick = (e) => {
        e.preventDefault();
        editPost(postId,query.ekind,list);
        navigate(-1);
    }

    const backClick = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const delPostClick = (e) => {
        e.preventDefault();
        delPost(postId);
        navigate(-1);
    }

    const delClick = async(replyId,e) => {
        const temp = await delReply(replyId);
        alert("댓글이 삭제되었습니다.");
    }

    const replyPost = async(e) => {
        e.preventDefault(); 
        await postReply(preply,postId);
        alert("답글이 작성되었습니다.");
    }
    
    const onChangeTitle = e =>{
        setList({
            ...list,
            postTitle:e.target.value
        });
    }

    const onChangeContent = e =>{
        setList({
            ...list,
            postContent:e.target.value
        });
    }

    const onchange = e =>{
        const {name, value} = e.target;
        setPreply({
            ...preply,
            [name]:value
        })
    }

    async function get(){
        const temp = await getTypelist(postId);
        const temp2 = await getReply(postId);
        setReply(temp2);
        setList({
            postTitle:temp.postTitle,
            postContent:temp.postContent,
            userName:temp.userName
        });
    }

    useEffect(() => {
        get();
    }, [postId]);

    return (
        <div className={styles.App}>
            <h1>{query.kind}</h1>
                <div className={styles.form_wrapper} >
                {
                    userId===list.userName?
                    <div key={list.postId}><input className={styles.title_input} type='text' name="postTitle" placeholder='제목' value={list.postTitle} onChange={(e) => onChangeTitle(e)}/>
                    <textarea className={styles.text_area} name="postContent" placeholder='내용' value={list.postContent} onChange={(e) => onChangeContent(e)}/></div>:
                    <div key={list.postId}><input className={styles.title_input} type='text' name="postTitle" placeholder='제목' value={list.postTitle} readOnly />
                    <textarea className={styles.text_area} name="postContent" placeholder='내용' value={list.postContent} readOnly /></div>

                }            
                </div>
                {userId===list.userName?<button className={styles.submit_button} onClick={(e)=>editClick(e)}>수정하기</button>:<></>}
                <button className={styles.submit_button} onClick={(e)=>backClick(e)}>돌아가기</button>
                {userId===list.userName?<button className={styles.submit_button} onClick={(e)=>delPostClick(e)}>삭제하기</button>:<></>}
                <br/>
                <br/>
                <hr/>
                <div className={styles.replyBox}>
                <h3>답글 쓰기</h3>
                <form onSubmit={(e)=>replyPost(e)}>
                    <input className={styles.reply} name="userName" placeholder='이름' value={userId} readOnly></input>
                    <input className={styles.reply_content} name="replyContent" placeholder='내용'  onChange={(e)=>onchange(e)} ></input>
                    <button type="submit">보내기</button>    
                </form>
                <br/>
                <hr/>
                <br/>
                <h3>답글 리스트</h3>
                {
                    reply.map(reply => <div key={reply.replyId}><input className={styles.reply} name="postContent" placeholder='내용' value={reply.userName} readOnly ></input>
                    <input className={styles.reply_content} name="postContent" placeholder='빈 내용입니다.' value={reply.replyContent} readOnly ></input>
                    {userId===reply.userName?<button onClick={(e) => delClick(reply.replyId,e)}>삭제</button>:<></>}<br/><br/></div>)
                }
                </div>
                <br/><br/><br/><br/><br/>
        </div>
    );
};

export default GetList;