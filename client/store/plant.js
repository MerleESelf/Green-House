import axios from 'axios';

//action constant for single plant
const GET_SINGLE_PLANT = 'GET_SINGLE_PLANT';

//action constant for edit plant
const EDIT_PLANT = 'EDIT_PLANT';

//action constant for unassign room
const UNASSIGN_ROOM = 'UNASSIGN_ROOM'

//action creator for single plant
const getSinglePlant = (plant) => {
  return {
    type: GET_SINGLE_PLANT,
    plant,
  };
};

//action creator for assign room 
const ASSIGN_ROOM = 'ASSIGN_ROOM'

//action creator for edit plant
const editPlant = (plant) => {
  return {
    type: EDIT_PLANT,
    plant,
  };
};

//action creator for UNASSIGN_ROOM
const unassignRoom = (plant) => {
  return {
    type: UNASSIGN_ROOM,
    plant
  }
}

const assignRoom = (plant) => {
  return{
    type: ASSIGN_ROOM, 
    plant
  };
};



// thunk for single plant
export const fetchSinglePlant = (id) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/plants/${id}`)
    const plant = data;
    dispatch(getSinglePlant(plant));
  }
};

// thunk for edit plant
export const updatePlant = (plant) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/plants/${plant.id}`, plant);
    dispatch(editPlant(updated));
  };
};

// thunk for unassign room
export const removeAssociation = (plantId, roomId) => {
  return async (dispatch) => {
    const {data: removed} = await axios.put(`/api/plants/${plantId}/unassign/${roomId}`)
    dispatch(unassignRoom(removed))
  }
}

//thunk for add plant to room 
export const addAssociation = (roomId, plantId) => {
  return async (dispatch) => {
    const {data: added} = await axios.put(`/api/plants/${plantId}/assign/${roomId}`)
    dispatch(assignRoom(added))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function singleplantReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PLANT:
      return  action.plant
    case EDIT_PLANT:
      return action.plant
    case UNASSIGN_ROOM:
    return action.plant
    case ASSIGN_ROOM: 
    return action.plant
    default:
      return state;
  }
}