import { AxiosInstance } from "axios";

const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      console.log("@@", config);

      config.url = config.url?.includes("serviceKey")
        ? config.url
        : config.url + `&serviceKey=${import.meta.env.VITE_TRAVEL_API_KEY}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
export default setupInterceptors;
