export const GET_TOKEN = () => {
  return localStorage.getItem("TOKEN");
};

export const SET_TOKEN = (data: string) => {
  localStorage.setItem("TOKEN", data);
};

export const REMOVE_TOKEN = () => {
  return localStorage.removeItem("TOKEN");
};
