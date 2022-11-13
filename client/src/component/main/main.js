import React from 'react';
import Home from '../main/home/home';
import { Route,Routes } from 'react-router-dom'
import Layout from '../layout/layout';
import Login from './login/login';
import Member from './member/member';
import Board from './board/board';
import Write from './board/wrtie';
import Study from './board/study';
import GetList from './board/getlist';
import Mypage from './userInfo/mypage';
import EditPage from './userInfo/editpage';
import MyList from './userInfo/mylist';
import OpenViduPage from '../openvidu/openvidupage';
import Ovwrite from './board/ovwrite';
import Ovedit from './board/ovedit';
import Kakoauth from './login/kakoauth';



const Main = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route exact={true} path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/mypage/info" element={<Mypage/>}/>
                <Route path="/mypage/edit" element={<EditPage/>}/>
                <Route path="/mypage/myList" element={<MyList/>}/>
                <Route path="/board/studyRoom" element={<Study/>}/>
                <Route path="/board/STUDY" element={<Board kind="토익" ekind="STUDY" />}/>
                <Route path="/board/job" element={<Board kind="취업" ekind="JOB"/>}/>
                <Route path="/board/license" element={<Board kind="자격증" ekind="LICENSE"/>}/>
                <Route path="/board/write/STUDY" element={<Write kind="토익" ekind="STUDY"/>}/>
                <Route path="/board/write/job" element={<Write kind="취업" ekind="JOB"/>}/>
                <Route path="/board/write/license" element={<Write kind="자격증" ekind="LICENSE"/>}/>
                <Route path="/board/list" element={<GetList />} />
                <Route path="/board/ovwrite" element={<Ovwrite/>}/>
                <Route path="/board/ovedit" element={<Ovedit />}/>
            </Route>
            <Route path="/webrtc/" element={<OpenViduPage />}/>
            <Route path="/kakao/oauth" element={<Kakoauth REST_API_KEY="d9a87ff60b8dbb5c22eaf114ed0f30d4" REDIRECT_URI="http://studyaim.ml/kakao/oauth"/>}/>
        </Routes>
    );
};

export default Main;