import React, {useReducer} from "react";
import mainReducer from "./mainReducer";
import MainContext from "./mainContext";
import {FACEBOOK_AUTH_FAIL, FACEBOOK_AUTH_SUCCESS, SET_LOADING, SET_USER_PROFILE, SET_VOTE_RESULT} from "./types";


const MainState = props => {
    const initialState = {
        isAuthenticated: false,
        voteResult: null,
        isLoading: false,
        facebookProfile: {
            name: '',
            email: '',
            picture: '',
        },
        userProfile: {
            firstName: '',
            lastName: '',
            code: '',
            department: '',
            classPeriod: ''
        }
    };

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const login = facebookResponse => {
        if (facebookResponse === null) {
            dispatch({
                type: FACEBOOK_AUTH_FAIL
            });
        } else {
            dispatch({
                type: FACEBOOK_AUTH_SUCCESS,
                payload: facebookResponse
            });
        }
    };

    const setUserProfile = (name, value) => {
        dispatch({
            type: SET_USER_PROFILE,
            payload: {
                name, value
            }
        })
    };

    const setVote = value => {
        dispatch({
            type: SET_VOTE_RESULT,
            payload: value
        })
    };

    const setLoading = value => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    };

    return (
        <MainContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                facebookProfile: state.facebookProfile,
                userProfile: state.userProfile,
                voteResult: state.voteResult,
                isLoading: state.isLoading,
                setVote,
                login,
                setUserProfile,
                setLoading
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
};

export default MainState;