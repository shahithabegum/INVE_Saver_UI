import axios from "axios";
import { BASE_URL } from "../config/index";


const create_User=async(data)=>{
    return await axios.post(BASE_URL+`/api/register`,data)
}
const change_password=async(data)=>{
    return await axios.patch(BASE_URL+`/api/changepassword`,data)
}
export{
    create_User,change_password
}