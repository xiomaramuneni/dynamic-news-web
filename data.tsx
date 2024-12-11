import axios from "../api/axios"
export const fetchNews = async ()=> {
    const result = await axios.get("/news/all");
    return result
}
export const fetchNewsCategory = async ()=> {
    const result = await axios.get("/cat/all");
    return result
}
export const fetchNewsById = async (id:number)=> {
    const result = await axios.get(`/news/${id}`);
    
    return result
}
export const addNews = async (data)=> {
    await axios.post("/news/add-news", data, {headers:{"Content-Type":"multipart/form-data"}})
    .then((res)=>{
        return res.data
    })
    .catch((error)=>{
        //throw new Error(error)
        return error
    })
}
