import axios from 'axios';

//action constant for all windows
const GET_ALL_WINDOWS = 'GET_ALL_WINDOWS';

// action constant for add new window
const ADD_NEW_WINDOW = 'ADD_NEW_WINDOW';

//action constant for delete window
const DELETE_WINDOW = 'DELETE_WINDOW';

//action creator for all windows
const getAllWindows = (windows) => {
  return {
    type: GET_ALL_WINDOWS,
    windows,
  };
};

//action creator for add new window
const addNewWindow = (window) => {
  return {
    type: ADD_NEW_WINDOW,
    window,
  };
};

//action creator for delete window
const deleteWindow = (window) => {
  return {
    type: DELETE_WINDOW,
    window,
  };
};

// thunk for all windows
export const fetchWindows = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/windows');
    const windows = data;
    dispatch(getAllWindows(windows));
  };
};

//thunk for new window
export const setWindows = (window) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/windows', window);
    dispatch(addNewWindow(created));
  };
};

//thunk for delete window
export const removeWindow = (id) => {
  return async (dispatch) => {
    const {data: window} = await axios.delete(`/api/windows/${id}`);
    dispatch(deleteWindow(window));
  };
};


// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function windowsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_WINDOWS:
      return action.windows;
    case ADD_NEW_WINDOW:
      return [...state, action.window];
    case DELETE_WINDOW:
        return state.filter((window) => window.id !== action.window.id);
    default:
      return state;
  }
}