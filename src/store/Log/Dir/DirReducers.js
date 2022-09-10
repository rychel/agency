const initialstate = {
  info_agency: [],
  config_transport: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case 'GET_AGENCY_DIRECTION':
      return {
        ...state,
        info_agency: action.info_agency,
      };
    case 'GET_CONFIG_TRANSPORT':
      return {
        ...state,
        config_transport: action.config_transport,
      };
    default:
      return state;
  }
};
