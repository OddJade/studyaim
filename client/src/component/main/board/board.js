import {React, useState} from 'react';
import { useDispatch } from 'react-redux';
import styles from './board.module.css';
import { Link } from 'react-router-dom';
import { getType } from '../../../axios/board/getType';
import { useEffect } from 'react';
import { postId } from '../../../redux/store';
import OVGet from '../../../axios/openvidu/get'

const Board = (props) => {
    const {kind, ekind} = props;
    const dispatch = useDispatch();
    const postID = (id) => dispatch(postId(id));

    const [list,setList] = useState([{
        postContent: null,
        postTitle: null,
        postType: null,
        postId: null,
        userName: null
    }]);
    
    const onclick = (id) => {
        postID(id);
    }

    useEffect(() => {
        async function fetchData(){
            setList(await getType(ekind));
        }
        fetchData();
    },[props])

    return (
        <div className={styles.container}>
            <h1>{kind}</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>유저명</th>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map(list => <tr key={list.postId}><td id="first"><Link style={{ textDecoration: 'none' }} 
                    to={`/board/list?kind=${kind}&ekind=${ekind}`} onClick={() => onclick(list.postId)}>{list.postTitle}</Link>
                    </td><td id="second">{list.userName}</td></tr>)}    
                </tbody> 
            </table>
            <br/><div className={styles.button}>
                <Link to={`/board/write/${ekind}`}><button>글쓰기</button></Link>
            </div>
        </div>
        
    );
};

export default Board;