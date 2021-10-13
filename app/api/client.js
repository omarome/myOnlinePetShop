import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
  // here in the baseURL you should add the server ip insted or if you would ike to run it 
  // on the local machine then you have to write your local machine ip
  baseURL: "http:172.20.10.2:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
