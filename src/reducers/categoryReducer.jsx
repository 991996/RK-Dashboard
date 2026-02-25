export default function categoryReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "ADD_IMAGE": {
      return {
        ...state,
        images: [...state.images, ...action.payload],
      };
    }
    case "REMOVE_IMAGE": {
      return {
        ...state,
        images: [],
      };
    }
    case "SET_CATEGORY": {
      return action.payload;
    }
    default:
      return state;
  }
}
