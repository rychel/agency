export const URL = 'http://192.168.8.101:5000';

export const get_agency_direction = id_direction => {
  return async dispatch => {
    try {
      const request = await fetch(URL + '/api/get_agency_direction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: parseInt(id_direction)}),
      });
      const success = await request.json();
      dispatch({type: 'GET_AGENCY_DIRECTION', info_agency: success});
    } catch (e) {
      console.log(e);
    }
  };
};

export const get_config_transport = id_direction => {
  return async dispatch => {
    try {
      const request = await fetch(URL + '/api/get_config_transport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: parseInt(id_direction)}),
      });
      const success = await request.json();
      dispatch({type: 'GET_CONFIG_TRANSPORT', config_transport: success});
    } catch (e) {
      console.log(e);
    }
  };
};

export const update_config_transport = (id_direction, data_updated) => {
  return async dispatch => {
    try {
      fetch(URL + '/api/update_config_transport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: parseInt(id_direction),
          value: data_updated,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const update_site_localisation = (id_direction, data_updated) => {
  return async dispatch => {
    try {
      fetch(URL + '/api/update_site_localisation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: parseInt(id_direction),
          value: data_updated,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const add_target_point = (id_direction, data) => {
  return async dispatch => {
    try {
      fetch(URL + '/api/add_target_point', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: parseInt(id_direction), value: data}),
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const get_target_point = id_direction => {
  return async dispatch => {
    try {
      const request = await fetch(URL + '/api/get_target_point', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: parseInt(id_direction)}),
      });
      const success = await request.json();
      dispatch({type: 'GET_TARGET_POINT', target_point: success});
    } catch (e) {
      console.log(e);
    }
  };
};

export const update_self_target = (id_direction, id, data) => {
  return async dispatch => {
    try {
      fetch(URL + '/api/update_self_target', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: parseInt(id_direction),
          id: id,
          value: data,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const delete_self_target = (id_direction, id) => {
  return async dispatch => {
    try {
      fetch(URL + '/api/delete_self_target', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: parseInt(id_direction), id: id}),
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const get_personal_employed = id_direction => {
  return async dispatch => {
    try {
      const request = await fetch(URL + '/api/get_personal_employed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: parseInt(id_direction)}),
      });
      const success = await request.json();
      dispatch({type: 'GET_PERSONAL_EMPLOYED', personal_employed: success});
    } catch (e) {
      console.log(e);
    }
  };
};

export const add_self_guichet = (id_direction, data) => {
  return async dispatch => {
    try {
      fetch(URL + '/api/add_self_guichet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title: parseInt(id_direction), value: data}),
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const get_guichet_tips = (id_direction) => {
  return async dispatch => {
    try {
      const request = await fetch(URL + '/api/get_guichet_tips/' + id_direction, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const success = await request.json();
      dispatch({type: 'GET_GUICHET_TIPS', guichet_tips: success});
    } catch (e) {
      console.log(e);
    }
  };
};
