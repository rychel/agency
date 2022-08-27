const initialstate = {
  token: null,
  role: null
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.token,
        role: action.role,
      };
    case 'LOGOUT':
      return {
        token: null,
    };
    default: 
      return state;
  }
};
