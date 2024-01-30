import  axios  from 'axios'
import { useEffect, useState } from 'react'
import useAxios from "./useAxios"

const useBlogCalls = (navigation) => {
const { axiosWithToken } = useAxios()
const BASE_URL = "https://blogapp-fs-backend.vercel.app" 

const [loading, setLoading] = useState(true)
const [err, setErr] = useState()
const [data, setData] = useState([])

const getData = async () => {

    try {
        const {data} = await axios(`${BASE_URL}/api/blogs`)
        setData(data)
        console.log(data);

    } catch (error) { setErr(error)
        
    }finally{setLoading(false)}
}

const sendBlog = async (values) => {

    try {
      const { data } = await axiosWithToken.post(`/api/blogs/`, values, 
      );
     
      navigation.navigate("Me")
      console.log(data);
    } catch (error) {
      console.log(error.message);
      
    }
  };

  const getCat = async () => {
    try {
      const { data } = await axios(
        `${BASE_URL}/api/categories/`
      );
      setData(data);
    //   console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };


  return {loading, err, data, getData, sendBlog, getCat}

}

export default useBlogCalls 
