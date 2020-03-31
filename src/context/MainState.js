import React, {useReducer} from "react";
import mainReducer from "./mainReducer";
import MainContext from "./mainContext";
import {FACEBOOK_AUTH_FAIL, FACEBOOK_AUTH_SUCCESS} from "./types";


const MainState = props => {
    const initialState = {
        isAuthenticated: false,
        facebookProfile: {},
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
            console.log('Is here?');
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

    return (
        <MainContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                login
            }}
        >
            {props.children}
        </MainContext.Provider>
    )
};

export default MainState;