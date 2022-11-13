const initialState = {
    login:false,
    userId:"",
    postId:"",
    refesh:true,
};

export const ONLOGIN = 'ONLOGIN';
export const OFFLOGIN = 'OFFLOGIN';
export const USERID = 'USERID';
export const POSTID = 'POSTID';
export const REFRESH = 'REFESH';

export function onlogin(){
    return {
        type: ONLOGIN
    };
}

export function userId(id){
    return {
        type: USERID,
        payload:id
    };
}

export function postId(id){
    return {
        type: POSTID,
        payload:id
    };
}

export function offlogin(){
    return {
        type: OFFLOGIN
    };
}

export function refresh(){
    console.log("refresh");
    return {
        type: REFRESH
    };
}


export function reducer(state = initialState, action) {
    switch(action.type){
        case ONLOGIN:
            return {
                ...state,
                login:true
            };
        case OFFLOGIN:
            return {
                ...state,
                login:false
            };
        case USERID:
            return {
                ...state,
                userId:action.payload
            };
        case POSTID:
            return {
                ...state,
                postId:action.payload
            };
        case REFRESH:
            return {
                ...state,
                refresh:!state.refresh
            }
        default:
            return state;
    }
}