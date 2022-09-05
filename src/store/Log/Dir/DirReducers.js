const initialstate = {
  info_agency: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case 'GET_AGENCY_DIRECTION':
      return {
        ...state,
        info_agency: action.info_agency,
      };
    default:
      return state;
  }
};
