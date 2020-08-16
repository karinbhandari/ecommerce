import { axiosInstance, authAxios } from './index';

const isDev = process.env.NODE_ENV === 'development';

const getWithoutHeader = (link: string, data: any, onSuccess: any, onFail: any): any => {
  axiosInstance
    .get(link, data)
    .then(({ data }) => {
      if (isDev) {
        console.log(data, '<+++++++++++++++++++++++++++++++++++++++++ getWithoutHeader [RESP] ');
      }
      onSuccess(data);
    })
    .catch((err) => {
      if (isDev)
        console.log(err, '<+++++++++++++++++++++++++++++++++++++++++ getWithoutHeader [ERR] ');
      onFail(err);
    });
};

const getWithHeader = (link: string, data: any, onSuccess: any, onFail: any) => {
  authAxios
    .get(link, data)
    .then(({ data }) => {
      if (isDev) {
        console.log(data, '<+++++++++++++++++++++++++++++++++++++++++ getWithHeader [RESP] ');
      }
      onSuccess(data);
    })
    .catch((err) => {
      if (isDev)
        console.log(err, '<+++++++++++++++++++++++++++++++++++++++++ getWithHeader [ERR] ');
      onFail(err);
    });
};

export { getWithoutHeader, getWithHeader };
