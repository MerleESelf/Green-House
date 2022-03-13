import axios from 'axios';

//action constant for all rooms
const GET_ALL_ROOMS = 'GET_ALL_ROOMS';

// action constant for add new room
const ADD_NEW_ROOM = 'ADD_NEW_ROOM';

//action constant for delete room
const DELETE_ROOM = 'DELETE_ROOM';

//action creator for all rooms
const getAllRooms = (rooms) => {
  return {
    type: GET_ALL_ROOMS,
    rooms,
  };
};

//action creator for add new room
const addNewRoom = (room) => {
  return {
    type: ADD_NEW_ROOM,
    room,
  };
};

//action creator for delete room
const deleteroom = (room) => {
  return {
    type: DELETE_ROOM,
    room,
  };
};

// thunk for all rooms
export const fetchRooms = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/rooms');
    const rooms = data;
    dispatch(getAllRooms(rooms));
  };
};

//thunk for new room
export const setRooms = (room) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/rooms', room);
    dispatch(addNewRoom(created));
  };
};

//thunk for delete room
export const removeRoom = (id) => {
  return async (dispatch) => {
    const {data: room} = await axios.delete(`/api/rooms/${id}`);
    dispatch(deleteRoom(room));
  };
};


// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function roomsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_ROOMS:
      return action.rooms;
    case ADD_NEW_ROOM:
      return [...state, action.room];
    case DELETE_ROOM:
        return state.filter((room) => room.id !== action.room.id);
    default:
      return state;
  }
}