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
    default: 
      return state;
  }
};
