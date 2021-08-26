import { AuthAxiosInstance } from "./config/AxiosClient";

const resource = "/group";

export default {
  all(token,id) {
    return AuthAxiosInstance(token).get(`${resource}/${id}`);
  },
  create(token,payload) {
    return AuthAxiosInstance(token).post(`${resource}`,payload);
  }
};