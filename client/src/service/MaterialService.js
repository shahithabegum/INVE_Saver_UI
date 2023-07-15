import axios from "axios";
import { BASE_URL } from "../config/index";

const getAllMaterial=async()=>{
    return await axios.get(BASE_URL+'/api/getall')
}
const getMaterialById=async(id)=>{
    return await axios.get(BASE_URL+`/api/byId/${id}`)
}
const create_Material=async(data)=>{
    return await axios.post(BASE_URL+'/api/addMaterial',data)
}
const update_Material=async(id,data)=>{
    return await axios.put(BASE_URL+`/api/updateMaterial/${id}`,data)
}
const delete_Material=async(id)=>{
    return await axios.delete(BASE_URL+`/api/deleteMaterial/${id}`)
}
export{
    getAllMaterial,getMaterialById,create_Material,update_Material,delete_Material
}