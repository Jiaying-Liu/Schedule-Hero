import axios from 'axios';
import { 
    FETCH_USER,
    LOGIN
} from './types';

// session actions
export const login = (username, password) => async dispatch => {
    const res = await axios.post('/auth', {username, password});

    dispatch({ type: LOGIN, payload: res.data });
} 

// user actions
export const fetchUser = () => async (dispatch, getState) => {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + getState().session;
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
}