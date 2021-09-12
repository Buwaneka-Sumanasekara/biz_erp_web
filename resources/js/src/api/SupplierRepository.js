import { AuthAxiosInstance } from "./config/AxiosClient";

const resource = "/suppliers";

export default {
  all(token) {
    return AuthAxiosInstance(token).get(`${resource}`);
  },
  getSpecific(token,id) {
    return AuthAxiosInstance(token).get(`${resource}/${id}`);
  },
  create(token,payload) {
    return AuthAxiosInstance(token).post(`${resource}`,payload);
  },
  update(token,id,payload) {
    return AuthAxiosInstance(token).put(`${resource}/${id}`,payload);
  }
};