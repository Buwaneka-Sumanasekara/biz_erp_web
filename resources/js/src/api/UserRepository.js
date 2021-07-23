import { AuthAxiosInstance } from "./config/AxiosClient";

const resource = "/user";

export default {
  user(token) {
    return AuthAxiosInstance(token).get(`${resource}`);
  },
  logout(token) {
    return AuthAxiosInstance(token).get(`${resource}/logout`);
  },
};
