interface AuthStravaModel {
  access_token: string;
  athlete: any;
  refresh_token: string;
}

export const getTokenFromLS = () => {
  const auth = localStorage.getItem('token');
  
  return !!auth ? JSON.parse(auth) : false;
}

export const getRefreshTokenFromLS = () => {
  return '';
}

export const setTokenInLS = (token: AuthStravaModel) => {
  localStorage.removeItem('token');
  localStorage.setItem('token', JSON.stringify(token));
}

export const clearAuthInLS = () => {
  localStorage.removeItem('token');
}