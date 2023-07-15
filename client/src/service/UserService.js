import axios from "axios";
import { BASE_URL } from "../config/index";

const getallUsers=async()=>{
    return await axios.get(BASE_URL+'/api/allUsers')
}
const update_User=async(id,data)=>{
    return await axios.put(BASE_URL+`/api/updateuser/${id}`,data)
}
const delete_User=async(id)=>{
    return await axios.delete(BASE_URL+`/api/deleteuser/${id}`)
}
export{
    getallUsers,update_User,delete_User
}