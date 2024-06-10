import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actions/authAction"

const initialState = {
    isAuthenticated : false,
    loading:false,
    user:null,
    error:null
}

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_REQUEST:
            return {...state,loading:true,error:null}
        case LOGIN_SUCCESS:
            return {...state,loading:false,isAuthenticated:true,user:action.payload}
        case LOGIN_FAILURE:
            return {...state,loading:false,error:action.payload}
        case LOGOUT:
            return {...state,isAuthenticated:false,user:null}
        default:
            return state;
    }
}