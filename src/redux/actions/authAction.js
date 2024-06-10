import { fetchUsers } from '../../api/users/users';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    console.log('Dispatching login action with:', username, password);
    const user = await fetchUsers(username, password);
   
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const logout = () => ({
  type: LOGOUT
});
