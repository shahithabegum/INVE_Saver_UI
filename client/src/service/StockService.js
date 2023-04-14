import axios from 'axios'
import {BASE_URL} from '../config/index'
const getStock=async()=>{
   return await axios.get(BASE_URL+"/api/getStock")
}
export{
    getStock
}