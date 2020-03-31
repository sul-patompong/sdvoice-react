import {FACEBOOK_AUTH_FAIL, FACEBOOK_AUTH_SUCCESS} from "./types";


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
        default:
            return state;
    }
};