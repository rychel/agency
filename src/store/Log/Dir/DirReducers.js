const initialstate = {
  info_agency: [],
  config_transport: [],
  target_point: [],
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
    case 'GET_TARGET_POINT':
      return {
        ...state,
        target_point: action.target_point,
      };
    default:
      return state;
  }
};
