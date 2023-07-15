import axios from "axios";
import { BASE_URL } from "../config/index";

const getAllDelivery=async()=>{
    return await axios.get(BASE_URL+'/api/del')
}
const getDeliveryById=async(id)=>{
    return await axios.get(BASE_URL+`/api/delbyId/${id}`)
}
const create_Delivery=async(data)=>{
    return await axios.post(BASE_URL+'/api/addDeliveryReports',data)
}
const update_Delivery=async(id,data)=>{
    return await axios.put(BASE_URL+`/api/updateDeliveryReports/${id}`,data)
}
const delete_Delivery=async(id)=>{
    return await axios.delete(BASE_URL+`/api/deleteDeliveryReports/${id}`)
}
export{
    getAllDelivery,getDeliveryById,create_Delivery,update_Delivery,delete_Delivery
}