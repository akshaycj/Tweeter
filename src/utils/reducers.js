const initialState = {
  user: []
};

export const setUser = user => ({
  type: "USER",
  user: user
});

export const getUser = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};
