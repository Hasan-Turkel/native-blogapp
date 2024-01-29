import  axios  from 'axios'
import { useEffect, useState } from 'react'

const useBlogCalls = () => {

const BASE_URL = "https://blogapp-fs-backend.vercel.app" 

const [loading, setLoading] = useState(true)
const [err, setErr] = useState()
const [data, setData] = useState([])

const getData = async () => {

    try {
        const {data} = await axios(`${BASE_URL}/api/blogs`)
        setData(data)
        ;

    } catch (error) { setErr(error)
        
    }finally{setLoading(false)}
}

useEffect(() => {

    getData()

}, [])


  return {loading, err, data}

}

export default useBlogCalls 
