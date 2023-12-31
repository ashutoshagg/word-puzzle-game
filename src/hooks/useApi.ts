import {useState} from 'react';

const useApi = (apiFunc: any) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    try {
      setData([]);
      setError(false);
      setLoading(true);
      const response = await apiFunc(...args);
      setData(response);
      return response;
    } catch (err: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {data, error, loading, request};
};

export default useApi;
