export const PRODUCT = {
  ADD_PRODUCT: "ADD_PRODUCT",
  FETCH_PRODUCT: "FETCH_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

const initialState = {
  error: false,
  data: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT.ADD_PRODUCT:
      return {
        ...state,
        data: action.payload,
      };

    case PRODUCT.FETCH_PRODUCT:
      return {
        ...state,
        data: action.payload,
      };

    case PRODUCT.DELETE_PRODUCT:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default productReducer;
