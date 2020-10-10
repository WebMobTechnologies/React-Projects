import {SET_TOKEN, SET_USER, SET_USER_INFO} from './action-types';
import {REHYDRATE} from 'redux-persist/src/constants';

let initialState = {
  user: null,
  token: null,
  userInfo: null,
};

const setToken = (token) => ({type: SET_TOKEN, token});
const setUser = (user) => ({type: SET_USER, user});
const setUserInfo = (userInfo) => ({type: SET_USER_INFO, userInfo});
const logout = () => ({type: REHYDRATE, payload: initialState});

export {setToken, setUser, logout, setUserInfo};
