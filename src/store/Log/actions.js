import AsyncStorage from '@react-native-async-storage/async-storage';

const API = 'http://192.168.8.100:5000/api/create_agency/access_token';

export const Start = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    

    if (token !== null) {
      console.log('ok good token');
      dispatch({type: 'LOGIN', payload: token});
    } else {
      console.log('not store token');
    }
  };
};

export const Login = (Username, Password) => {
  return async dispatch => {
    const token = Username + Password;
    await AsyncStorage.setItem('token', token);
    console.log('token stored');
    dispatch({type: 'LOGIN', payload: token});
  };
};

export const LogOut = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    console.log('token restored');
    dispatch({type: 'LOGOUT'});
  };
};
