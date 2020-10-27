import {
  SET_USER,
  SET_TOKEN,
  SET_USER_INFO,
} from './action-types';
import {REHYDRATE} from 'redux-persist/src/constants';

let initial = {
  user: null,
  token: null,
  userInfo: null,
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {user: action.user});
    case SET_TOKEN:
      return Object.assign({}, state, {token: action.token});
    case SET_USER_INFO:
      return Object.assign({}, state, {userInfo: action.userInfo});

    case REHYDRATE:
      console.log({...state, ...action.payload}, 'REHYDRATE');
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default reducer;
