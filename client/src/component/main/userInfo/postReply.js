import React from 'react';
import { getmylist } from '../../../axios/userInfo/getmylist';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './post';

const PostReply = (props) => {
    const {menuType} = props;
    const { userId } = useSelector(state => ({
        userId:state.userId
    }));

    const [myPosts, setMyPost] = useState();

    
    async function getPost (){
        const temp = await getmylist(userId, menuType);
        setMyPost(
            temp
        )
    }

    useEffect(() => {
        getPost();
    },[menuType]);

    return (
        <>
            {myPosts && myPosts.map(myPosts => <Post myPosts={myPosts} menuType={menuType}></Post>)}
        </> 
    )
};

export default PostReply;