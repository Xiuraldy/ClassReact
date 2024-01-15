import axios, { AxiosError, AxiosResponse } from "axios";

const API_URL = "http://localhost:4000/";

export const useAxios = () => {
  const handleResponse = async <T>(axiosPromise: Promise<AxiosResponse<T>>) => {
    return axiosPromise
      .then((response) => response.data)
      .catch((e: AxiosError<{ message?: string }>) => {
        throw new Error(
          e?.response?.data?.message
            ? e?.response?.data?.message
            : "error desconocido"
        );
      });
  };

  const get = <T>(path: string) => {
    return handleResponse(axios.get<T>(`${API_URL}${path}`));
  };

  const post = <T, D>(path: string, data: D) => {
    return handleResponse(axios.post<T>(`${API_URL}${path}`, data));
  };

  return { get, post };
};
