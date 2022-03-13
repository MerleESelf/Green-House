import axios from "axios";

/**
 * ACTION TYPES
 */
const GET_ALL_WINDOWS = "GET_ALL_WINDOWS";
const SET_WINDOWS = "SET_WINDOWS";
const REMOVE_WINDOWS = "REMOVE_WINDOWS";
const ADMIN_UPDATE_WINDOWS = "ADMIN_UPDATE_WINDOWS";

/**
 * ACTION CREATORS
 */
const setWindows = (windows) => ({ type: GET_ALL_WINDOWS, windows });


const createAWindow = (window) => ({
  type: SET_WINDOWS,
  window
})

const removeAWindow = (window) => ({
  type: REMOVE_WINDOWS,
  window
})

const adminUpdateAWindow = (window) => ({
  type: ADMIN_UPDATE_WINDOWS,
  window,
});
/**
 * THUNK CREATORS
 */
export const getAllwindows = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/windows");
    const windows = data;
    dispatch(setWindows(windows));
  };
};

export const createWindowThunk = (token, window, history) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.post('/api/admin/windows',{ params: {
        boo: token,
        data: window
      }});
      dispatch(createAWindow(data))
      history.push("/admin/windows")
    } catch (err) {
      console.log(err);
    }
  }
}

export const removeWindowThunk = (id, token, history) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.delete(`/api/admin/windows/${id}`,{ params: {
        boo: token
      }})
      dispatch(removeAWindow(data))
      history.push("/admin/windows")
    } catch (err) {
      console.log(err);
    }
  }
}

export const adminUpdateSingleWindow = (id, window, token, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/admin/windows/${id}`,{ params: {
        boo: token,
        data: window
      }});
      dispatch(adminUpdateAWindow(data));
      history.push("/admin/windows")
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_WINDOWS:
      return action.windows;
    case REMOVE_WINDOWS:
      return state.filter((window) => window.id !== action.window.id)
    case SET_WINDOWS:
      return [...state, action.window]
    case ADMIN_UPDATE_WINDOWS:
      return state.map((window) =>
      window.id === action.window.id ? action.window : window
    );
    default:
      return state;
  }
}