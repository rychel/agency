import AsyncStorage from '@react-native-async-storage/async-storage';

export const URL = 'http://192.168.43.45:5000';

/* DIRECTION TRUCKS ------------------------------ */

export const AGENCY_DIRECTION = () => {
  try {
    AsyncStorage.getItem('token').then(async value => {
      if (value != null) {
        const request = await fetch(
          'http://192.168.43.45:5000/api/get_agency_direction',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: parseInt(value)}),
          },
        );
        const success = await request.json();
        return success;
      }
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  AGENCY_DIRECTION: AGENCY_DIRECTION,
};

/* OTHER TRUCKS ------------------------------ */
