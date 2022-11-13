import React from 'react';
import styles from './mypage.module.css'
import { Link, useLinkClickHandler, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postId } from '../../../redux/store';

const Post = (props) => {
    const {myPosts, menuType} = props;
    const dispatch = useDispatch();
    const postID = (id) => dispatch(postId(id));
    const navigate = useNavigate();
    let kind;

    const linkClick = () => {
        if(myPosts.postType === "JOB")
        {
            kind = "취업";
        }
        else if(myPosts.postType === "English")
        {
            kind = "토익";
        }
        else
        {
            kind = "자격증";
        }
        postID(myPosts.postId);
        navigate(`/board/list?kind=${kind}&ekind=${myPosts.postType}`)
    }

    return (
        <div>
            {menuType==="myPosts"?<textarea className={styles.text_area} onClick={() => linkClick()} type='text' name="postTitle" placeholder='제목' value={`제목 : ${myPosts.title}\n내용 : ${myPosts.content}\n카테고리 : ${myPosts.postType}`} readOnly/>:
            menuType==="myReplies"?<textarea className={styles.text_area2} type='text' name="postTitle" placeholder='제목' value={`제목 : ${myPosts.title}\n내용 : ${myPosts.content}\n`} readOnly/>:
            <></>
            }
           
        </div>
    );
};

export default Post;