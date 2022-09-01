const initialState = {
  expense: [],
  loading: true,
};

export default function (state = initialState, action) {
  return {
    ...state,
    expense: action.payload,
    loading: false,
  };

  //   switch (action.type) {
  //     case GET_USERS:
  //       return {
  //         ...state,
  //         users: action.payload,
  //         loading: false,
  //       };
  //     case USERS_ERROR:
  //       return {
  //         loading: false,
  //         error: action.payload,
  //       };
  //     default:
  //       return state;
  //   }
}
