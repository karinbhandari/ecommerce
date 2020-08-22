export type initialAuthStateTypes = {
  token: string;
};

export enum authActionTypes {
  LOGIN_REQUEST = '@@heroes/LOGIN_REQUEST',
  SIGNUP_REQUEST = '@@heroes/SIGNUP_REQUEST',
}
