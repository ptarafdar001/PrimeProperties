import axios, { Method } from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/authSlice';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5251',
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface FetchDataProps {
  url: string;
  method: Method;
  data?: any;
  params?: any;
}

interface UseAxios {
  response: any;
  error: string;
  loading: boolean;
  fetchData: (props: FetchDataProps) => Promise<void>;
}

const useAxios = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  let controller = new AbortController();
  useEffect(() => {
    return () => controller.abort();
  }, []);

  const fetchData = async ({
    url,
    method,
    data = {},
    params = {},
  }: FetchDataProps) => {
    setLoading(true);

    controller.abort();
    controller = new AbortController();

    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        signal: controller.signal,
      });
      setResponse(result.data);
      console.log(result.data);
      dispatch(loginSuccess(result.data.result.token));
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.error('Request canceled', error.message);
      } else {
        setError(error.response ? error.response.data : error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useAxios;
