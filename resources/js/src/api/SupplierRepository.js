import { AuthAxiosInstance } from "./config/AxiosClient";

const resource = "/suppliers";

export default {
  all(token,id) {
    return AuthAxiosInstance(token).get(`${resource}`);
  },
  create(token,payload) {
    return AuthAxiosInstance(token).post(`${resource}`,payload);
  },
  update(token,id,payload) {
    return AuthAxiosInstance(token).put(`${resource}/${id}`,payload);
  }
};