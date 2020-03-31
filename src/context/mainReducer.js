import {FACEBOOK_AUTH_FAIL, FACEBOOK_AUTH_SUCCESS, SET_LOADING, SET_USER_PROFILE, SET_VOTE_RESULT} from "./types";


export default (state, action) => {
    switch (action.type) {
        case FACEBOOK_AUTH_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                facebookProfile: {}
            };
        case FACEBOOK_AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                facebookProfile: action.payload
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    [action.payload.name]: action.payload.value
                }
            };
        case SET_VOTE_RESULT:
            return {
                ...state,
                voteResult: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};