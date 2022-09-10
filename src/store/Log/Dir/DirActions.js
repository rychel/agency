export const get_agency_direction = (id_direction) => {
  return async dispatch => {
    try {
      const request = await fetch(
        'http://192.168.43.45:5000/api/get_agency_direction',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title: parseInt(id_direction)}),
        },
      );
      const success = await request.json();
      if(success){
        dispatch({type: 'GET_AGENCY_DIRECTION', info_agency: success});
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const get_config_transport = (id_direction) => {
  return async dispatch => {
    try {
      const request = await fetch(
        'http://192.168.43.45:5000/api/get_config_transport',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title: parseInt(id_direction)}),
        },
      );
      const success = await request.json();
      if(success){
        dispatch({type: 'GET_CONFIG_TRANSPORT', config_transport: success});
      }
    } catch (e) {
      console.log(e);
    }
  };
};