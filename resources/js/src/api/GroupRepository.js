import { AuthAxiosInstance } from "./config/AxiosClient";

const resource = "/group";

export default {
  all(token,id) {
    return AuthAxiosInstance(token).get(`${resource}/${id}`);
  }
};