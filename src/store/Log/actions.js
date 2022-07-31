export const Login = (Username, Password) => {
  const token = Username + Password;
  return {type: 'LOGIN', payload: token};
};
 