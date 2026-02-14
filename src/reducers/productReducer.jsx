export default function productReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "TOGGLE_FIELD": {
      const exists = state[action.field].includes(action.value);
      return {
        ...state,
        [action.field]: exists
          ? state[action.field].filter((color) => color !== action.value)
          : [...state[action.field], action.value],
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
        images: state.images.filter((image) => image.id !== action.payload.id),
      };
    }
    case "ADD_TAG": {
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    }
    case "REMOVE_TAG": {
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    }
    default:
      return state;
  }
}
