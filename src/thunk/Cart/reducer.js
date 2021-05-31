export const PRODUCT = {
  ADD_TO_CART: "ADD_TO_CART",
  FETCH_CART: "FETCH_CART",
  DELETE_CART: "DELETE_CART",
};

const initialState = {
  error: false,
  data: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT.ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case PRODUCT.FETCH_CART:
      return {
        ...state,
        data: action.payload,
      };

    case PRODUCT.DELETE_CART:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
