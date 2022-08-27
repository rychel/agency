import AsyncStorage from '@react-native-async-storage/async-storage';

export const Start = () => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const role = await AsyncStorage.getItem('role');
    if (token !== undefined) {
      dispatch({type: 'LOGIN', token: token, role: role});
    }
    else{
      console.log('not store token');
    }
  };
};

export const Login = (id, role) => {
  return async dispatch => {
    await AsyncStorage.setItem('token', id);
    await AsyncStorage.setItem('role', role);
    dispatch({type: 'LOGIN', token: id, role: role});
  };
};

export const LogOut = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('role');
    dispatch({type: 'LOGOUT'});
  };
};
