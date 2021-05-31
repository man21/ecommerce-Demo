export const PRODUCT = {
  ADD_WISHLIST: "ADD_WISHLIST",
  FETCH_WISHLIST: "FETCH_WISHLIST",
  DELETE_WISHLIST: "DELETE_WISHLIST",
};

const initialState = {
  error: false,
  data: [],
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT.ADD_WISHLIST:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case PRODUCT.FETCH_WISHLIST:
      return {
        ...state,
        data: action.payload,
      };

    case PRODUCT.DELETE_WISHLIST:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default wishListReducer;
