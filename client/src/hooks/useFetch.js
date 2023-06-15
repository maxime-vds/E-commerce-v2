 import { useEffect, useState } from "react";
 import { FetchDataFromApi } from "../utils/api";
 const useFetch = (endpoint) => {
     const [data, setData] = useState();

     useEffect(() => {
         makeApiCall();
     }, [endpoint]);

     const makeApiCall = async () => {
         const res = await FetchDataFromApi(endpoint);
         setData(res);
     };

     return { data };
 };
 export default useFetch;
