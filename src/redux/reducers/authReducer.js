import {CREATE_USER,LOGIN_USER,GET_GROUPS,GET_PERMISSIONS,SAVE_PERMISSIONS,USER_PROFILE} from '../type'

const initail={
createUser:[],
loginUser:[],
getGroups:[],
getPermissions:[],
savePermissions:[],
userProfile:[]
    }
const  authReducer= (state=initail,action) => {
    switch(action.type)
    {
      case CREATE_USER:
      return{
        createUser:action.payload,// return new array from payload(api backend)
      }
      case LOGIN_USER:
        return{
            loginUser:action.payload,// return new array from payload(api backend)
        }
        case GET_GROUPS:
        return{
            getGroups:action.payload,// return new array from payload(api backend)
        }
        case GET_PERMISSIONS:
        return{
            getPermissions:action.payload,// return new array from payload(api backend)
        }
        case SAVE_PERMISSIONS:
        return{
            savePermissions:action.payload,// return new array from payload(api backend)
        }
        case USER_PROFILE:
            return{
                userProfile:action.payload,// return new array from payload(api backend)
            }
         default:
            return state;
}
}
export default authReducer