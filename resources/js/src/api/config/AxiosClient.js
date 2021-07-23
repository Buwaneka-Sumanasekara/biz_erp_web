import axios from "axios";

const baseDomain = "";
const baseURL = `${baseDomain}/api`; // Incase of /api/v1;




const AxiosInstance = () => {return axios.create({ baseURL, withCredentials:true })};

const AuthAxiosInstance = (token) =>
{return axios.create({ baseURL, headers: { Authorization: `Bearer ${token}` } }) } ;

export { AxiosInstance, AuthAxiosInstance };
