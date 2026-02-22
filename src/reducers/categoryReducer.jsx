export default function categoryReducer(state, action) {
  switch (action.type) {
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
  }
}
