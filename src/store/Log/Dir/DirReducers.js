const initialstate = {
  info_agency: [],
  config_transport: [],
  target_point: [],
  personal_employed: [],
  guichet_tips: [],
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
    case 'GET_PERSONAL_EMPLOYED':
      return {
        ...state,
        personal_employed: action.personal_employed,
      };
    case 'GET_GUICHET_TIPS':
      return {
        ...state,
        guichet_tips: action.guichet_tips,
      };
    default:
      return state;
  }
};
