import axios from 'axios';

//action constant for all plants
const GET_ALL_PLANTS = 'GET_ALL_PLANTS';

// action constant for add new plant
const ADD_NEW_PLANT = 'ADD_NEW_PLANT';

//action constant for delete plant
const DELETE_PLANT = 'DELETE_PLANT';

//action creator for all plants
const getAllPlants = (plants) => {
  return {
    type: GET_ALL_PLANTS,
    plants,
  };
};

//action creator for add new plant
const addNewPlant = (plant) => {
  return {
    type: ADD_NEW_PLANT,
    plant,
  };
};

//action creator for delete plant
const deletePlant = (plant) => {
  return {
    type: DELETE_PLANT,
    plant,
  };
};

// thunk for all plants
export const fetchPlants = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/plants');
    const plants = data;
    dispatch(getAllPlants(plants));
  };
};

//thunk for new plant
export const setPlants = (plant) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/plants', plant);
    dispatch(addNewPlant(created));
  };
};

//thunk for delete plant
export const removePlant = (id) => {
  return async (dispatch) => {
    const {data: plant} = await axios.delete(`/api/plants/${id}`);
    dispatch(deletePlant(plant));
  };
};


// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function plantsReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_PLANTS:
      return action.plants;
    case ADD_NEW_PLANT:
      return [...state, action.plant];
    case DELETE_PLANT:
        return state.filter((plant) => plant.id !== action.plant.id);
    default:
      return state;
  }
}