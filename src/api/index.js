import { ApiConstant, AppConstant } from "const";
import apisauce from "apisauce";
import Cookie from "js-cookie";

export const defaultConfig = {
  baseURL: ApiConstant.BASE_URL,
  headers: ApiConstant.HEADER_DEFAULT,
  timeout: ApiConstant.TIMEOUT,
};

export const defaultFormConfig = {
  baseURL: ApiConstant.BASE_URL,
  headers: ApiConstant.HEADER_FORM,
  timeout: ApiConstant.TIMEOUT,
};

const Api = apisauce.create(defaultConfig);

export const createApiWithToken = (initConfig = defaultConfig, token) => {
  let newToken = token || Cookie.get(AppConstant.KEY_TOKEN);

  if (newToken) {
    initConfig.headers.Authorization = `Bearer ${newToken}`;
  }

  return apisauce.create(initConfig);
};

export default Api;
export const createApi = (initConfig = defaultConfig, token) => createApiWithToken(initConfig, token);
