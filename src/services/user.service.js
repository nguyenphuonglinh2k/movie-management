import Api from "api";
import { ApiConstant } from "const";

export const login = data => Api.post(ApiConstant.POST_LOGIN, data);
