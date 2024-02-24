export interface UserLoginData {
  username: string;
  password: string;
}

export interface UserLoginResponseData {
  code: number;
  data: { token?: string; message?: string };
}

export interface userInfoResponseData {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: Array<string>;
  routes: [string];
  token: string;
}
