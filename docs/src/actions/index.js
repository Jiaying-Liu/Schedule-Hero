import axios from 'axios';
import { 
    FETCH_USER,
    LOGIN,
    FETCH_TASKS,
    FETCH_APPOINTMENTS
} from './types';

var baseURL = '';

if(process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    baseURL = 'https://schedule-hero.herokuapp.com'
}

// session actions
export const login = (username, password) => async dispatch => {
    const res = await axios.post(baseURL + '/auth', {username, password});

    dispatch({ type: LOGIN, payload: res.data });
} 

export const register = (name, username, password) => async dispatch => {
    return await axios.post(baseURL + '/api/register', {name, username, password});
}

// user actions
export const fetchUser = () => async (dispatch) => {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    const res = await axios.get(baseURL + '/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
}

// task actions
export const fetchTasks = () => async (dispatch) => {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    const res = await axios.get(baseURL + '/api/tasks');

    dispatch({ type: FETCH_TASKS, payload: res.data });
}

export const addTask = (name, description, deadline) => async () => {
    var body = {name, description, deadline};
    body.id = 0;
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    return await axios.post(baseURL + '/api/task', body);
}

export const deleteTask = id => async (dispatch) => {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    return await axios.delete(baseURL + '/api/task', {data: { id }});
}

export const updateTask = (id, name, description, deadline, done) => async () => {
    var body = {id, name, description, deadline, done};
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    return await axios.put(baseURL + '/api/task', body);
}

// appointment actions
export const fetchAppointments = () => async (dispatch) => {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    const res = await axios.get(baseURL + '/api/appointments');

    dispatch({ type: FETCH_APPOINTMENTS, payload: res.data});
}

export const addAppointment = (name, description, start, end) => async () => {
    var body = {name, description, start, end};
    body.id = 0;
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    return await axios.post(baseURL + '/api/appointment', body);
}

export const deleteAppointment = id => async (dispatch) => {
    axios.defaults.headers.common['Authorization'] = 'JWT ' + sessionStorage.access_token;
    return await axios.delete(baseURL + '/api/appointment', {data: { id }});
}