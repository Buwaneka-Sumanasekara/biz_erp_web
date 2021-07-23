import {AxiosInstance} from './config/AxiosClient';

const resource = '/auth';

export default {
    login(payload) {
        return AxiosInstance().post(`${resource}/login`,payload);
    }
};