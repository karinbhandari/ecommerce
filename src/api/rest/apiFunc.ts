import { axiosInstance, authAxios } from './index';
import { apiFuncReturnTypes } from '../interfaces';

const isDev = process.env.NODE_ENV === 'development';

const getWithoutHeader = (link: string, data: any, onSuccess?: any, onFail?: any): any => {
  axiosInstance
    .get(link, data)
    .then((resp) => {
      // if (isDev) {
      //   console.log(resp, '<+++++++++++++++++++++++++++++++++++++++++ getWithoutHeader [RESP] ');
      // }
      onSuccess(resp);
      return { data: resp.data, err: null };
    })
    .catch((err) => {
      // if (isDev)
      //   console.log(err, '<+++++++++++++++++++++++++++++++++++++++++ getWithoutHeader [ERR] ');
      onFail(err);
      return { data: null, err: err.message };
    });
};

const getWithHeader = (link: string, data: any): Promise<apiFuncReturnTypes> => {
  return authAxios
    .get(link, data)
    .then(({ data }) => {
      return { data: data.data, err: null };
    })
    .catch((err) => {
      return { data: null, err: err.message };
    });
};

export { getWithoutHeader, getWithHeader };
