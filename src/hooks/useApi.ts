import { useState } from 'react';
import Cookies from 'js-cookie';
import { useLocation ,useNavigate} from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL
const port = process.env.REACT_APP_PORT_NO

const endpoint = `${apiUrl}${port?`:${port}`:''}`

interface ApiResponse<T> {
  data: 
  {
    [key: string]: any;
  } |null;
  error: string|null;
  loading: boolean;
  fetchData:(values?:any,onSuccess?:(res:any)=>void)=>void
}

type headerOptions = {
    'Content-Type': string;
    "Autherization"?:string,
    [key: string]: any;
  }

function useApi<T>(
  url: string,
  method:'POST' | 'PUT' | 'DELETE'|'GET',
  params?: Record<any, any>,
  authNotRequired?:boolean,
): ApiResponse<T> {
  const token = Cookies.get('token');
  const [data, setData] = useState<{[key: string]: any;} | null>(null);
  const [error, setError] = useState<string|null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (body:any , onComplete? : ( res : any )=>void, onError? : ( msg : string )=>void ) => {
    setLoading(true);
    const headers:headerOptions = {
      'Content-Type': 'application/json',
    }
    if(!authNotRequired){
      headers['Authorization']=`Bearer ${token}`
    }
    const queryParams = params
      ? `?${new URLSearchParams(params).toString()}`
      : '';
    const fullUrl = `${endpoint}${url}${queryParams}`;
    try {
      const response = await fetch(fullUrl, {
        method,
        headers: {
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      const responseData = await response.json();
      if (!(responseData?.status===200)) {
        setError(responseData?.message)
        if(responseData?.status ===403){
          Cookies.remove('token');
          Cookies.remove('refreshToken');
          const queryParams = { q: 'unauthorized' };
          const queryString = new URLSearchParams(queryParams).toString();
          navigate(`/?${queryString}`)
        }
        if( typeof onError === "function" ){
          onError(responseData?.message);
      }
      }

      else{
          setData(responseData);
          if( typeof onComplete === "function" ){
              onComplete(responseData);
          }
          setError(null)
        }
    } catch (err) {
      setData(null);
      setError('Something went wrong');

    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading,fetchData };
}

export default useApi;
