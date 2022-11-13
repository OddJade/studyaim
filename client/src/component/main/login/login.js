import {React, useState} from 'react';
import styles from './login.module.css'
import { Form , Input , Checkbox , Button} from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import * as Post from '../../../axios/user/post';
import { useDispatch } from 'react-redux';
import { onlogin, userId } from '../../../redux/store';
import kakaoImg from '../../../img/kakaoLogin.png';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogin = () => dispatch(onlogin());
    const userID = (id) => dispatch(userId(id));
    const [user,setUser] = useState({
        name:'',
        password:''
    });

    const REST_API_KEY = "d9a87ff60b8dbb5c22eaf114ed0f30d4";
    const REDIRECT_URI = "http://studyaim.ml/kakao/oauth";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const onchange = e =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const userPost = async(e) => {
        e.preventDefault(); 
        const post = await Post.post(user);
        if(post)
        {
            alert("로그인이 성공적으로 되었습니다.");
            onLogin();
            userID(user.name);
            setUser({name:'', password:''});
            navigate("/");
        }else{
            alert("아이디 또는 비밀번호는 틀립니다.");
            navigate("/login"); 
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <form className={styles.form} onSubmit={(e)=>userPost(e)}>
                    <div>
                        <label htmlFor="user-id">아이디</label><br/>
                        <input type="text" name="name" onChange={(e)=>onchange(e)}/>
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label><br/>
                        <input name="password" type="password" onChange={(e)=>onchange(e)}/>
                    </div>
                    <div style={{marginTop:10}}>
                    <button type="submit">로그인</button>
                        <Link to="/member"><Button type="primary" htmlType="submit" >회원가입</Button></Link>
                    </div>
                    <p/>
                </form>
                <div className={styles.kakaoImg}><a href={KAKAO_AUTH_URL}><img alt="user" src={kakaoImg}></img></a></div>
            </div>
        </div>
    );
};

export default Login;