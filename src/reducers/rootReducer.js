import {combineReducers} from 'redux'
import {profileInfo, profileData} from './index';


const rootReducer = combineReducers({
    profileInfo,
    profileData
})

export default rootReducer;