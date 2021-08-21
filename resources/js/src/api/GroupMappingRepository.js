import { AuthAxiosInstance } from "./config/AxiosClient";

const resource = "/group-mapping";

export default {
  all(token) {
    return AuthAxiosInstance(token).get(`${resource}`);
  },
  byGroup1Id(token,group1_id) {
    return AuthAxiosInstance(token).get(`${resource}/${group1_id}`);
  },
};