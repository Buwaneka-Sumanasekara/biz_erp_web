import axios from "axios";

import configureStore from "../../configureStore";
const {store} = configureStore();

const baseDomain = "";
const baseURL = `${baseDomain}/api`; // Incase of /api/v1;

const AxiosInstance = () => {
  return axios.create({ baseURL, withCredentials: true });
};

const AuthAxiosInstance = () => {
  const state = store.getState();
  const authToken = state.user.token;
  return axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authToken}` },
  });
};

export { AxiosInstance, AuthAxiosInstance };
