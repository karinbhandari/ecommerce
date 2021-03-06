import Axios from 'axios';
import { configureStore } from '../../redux/store';
import { getFromCookie } from '../../utilities/storageFunc';
import { AppStateType } from '../../redux/types';

const axiosInstance = Axios.create();
//axios with header
const authAxios = Axios.create();
//axios intercepting changes in storage
authAxios.interceptors.request.use(
  (config) => {
    const store: any = configureStore({});
    const tkn = store?.login?.token || '';
    const authToken = getFromCookie('ganesha_token') || tkn;
    const token = authToken;
    if (token) {
      config.headers.Authorization = token;
      config.headers.allow;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export { axiosInstance, authAxios };
