import * as actionType from './../constants';

export default getProfileInfo = () => ({
    type:actionType.GET_USER_PROFILE_INFO_ASYNC
})

export default getProfileInfoSuccess = (action)=> ({
    type:actionType.GET_USER_PROFILE_DATA_SUCCESS,
    payload:action
})

export default getProfileInfoFailure = ()=> ({
    type:actionType.GET_USER_PROFILE_DATA_FAILURE,
})