export default function productReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "TOGGLE_SIZE": {
      const exists = state.sizes.includes(action.payload);
      return {
        ...state,
        sizes: exists
          ? state.sizes.filter((size) => size !== action.payload)
          : [...state.sizes, action.payload],
      };
    }
    case "TOGGLE_COLOR": {
      const exists = state.colors.includes(action.payload);
      return {
        ...state,
        colors: exists
          ? state.colors.filter((color) => color !== action.payload)
          : [...state.colors, action.payload],
      };
    }
    default:
      return state;
  }
}
