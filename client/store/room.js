import axios from 'axios';

//action constant for single Room
const GET_SINGLE_ROOM = 'GET_SINGLE_ROOM';

//action constant for edit Room
const EDIT_ROOM = 'EDIT_ROOM';

//action constant for unassign room
const UNASSIGN_PLANT = 'UNASSIGN_PLANT'

//action creator for single Room
const getSingleRoom = (room) => {
  return {
    type: GET_SINGLE_ROOM,
    room,
  };
};

//action creator for edit Room
const editRoom = (room) => {
  return {
    type: EDIT_ROOM,
    room,
  };
};

//action creator for UNASSIGN_Room
const unassignPlant = (room) => {
  return {
    type: UNASSIGN_PLANT,
    room
  }
}

// thunk for single Room
export const fetchSingleRoom = (id) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/rooms/${id}`)
    const room = data;
    dispatch(getSingleRoom(room));
  }
};

// thunk for edit Room
export const updateRoom = (room) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/rooms/${room.id}`, room);
    dispatch(editRoom(updated));
  };
};

// thunk for unassign room
export const removeAssociation = (roomId, plantId) => {
  return async (dispatch) => {
    const {data: removed} = await axios.put(`/api/rooms/${roomId}/unassign/${plantId}`)
    dispatch(unassignPlant(removed))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleRoomReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_ROOM:
      return  action.room
    case EDIT_ROOM:
      return action.room
    case UNASSIGN_PLANT:
    return action.room
    default:
      return state;
  }
}