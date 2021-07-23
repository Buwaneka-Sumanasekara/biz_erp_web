import {AuthAxiosInstance} from './config/AxiosClient';

const resource = '/user';

export default {
    user() {
        return AuthAxiosInstance().get(`${resource}/`);
    }
};