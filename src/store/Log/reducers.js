const initialstate = {
  authtoken: null,
  authid: null,
  authrole: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authtoken: action.payload,
      };
    case 'LOGOUT':
      return {
        authtoken: null,
    };
    default: 
      return state;
  }
};
