export const CART = {
  ADD_TO_CART: "ADD_TO_CART",
  FETCH_CART: "FETCH_CART",
  DELETE_CART: "DELETE_CART",
  UPDATE_ONE_CART: "UPDATE_ONE_CART"
};

const initialState = {
  error: false,
  data: [],
};

const cartReducer = (state = initialState, action) => {
  const getCurrentIndex = (id) => state.data.findIndex((i) => i.id === id)
  switch (action.type) {
    case CART.ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case CART.FETCH_CART:
      return {
        ...state,
        data: action.payload,
      };

    case CART.DELETE_CART:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

      case CART.UPDATE_ONE_CART:
        const updatedData1 = [...state.data]
        updatedData1[getCurrentIndex(action.payload.id)] = action.payload
        return {
          ...state,
          data: updatedData1
        }
    default:
      return state;
  }
};

export default cartReducer;
