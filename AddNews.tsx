import { useQuery } from '@tanstack/react-query'
import axios from "../../api/axios"
import React, {useState} from 'react'
import { fetchNewsCategory} from '../../utils/data'
import { toast, ToastContainer } from 'react-toastify'
interface Category {
    id: number,
    category: string
}
const AddNews:React.FC = () => {
    const [values,setValues] = useState({
        imgfile:"",
        head:"",
        content:"",
        category:""
    })
    const [loading,setLoading] = useState<boolean>(false)
    const { data,isLoading, error } = useQuery({
        queryKey:["newscategory"],
        queryFn:()=> fetchNewsCategory()
    })
    if (isLoading) return <span>Loading</span>
    if (error){
        console.error(error)
        return <span>Internal Server Error</span>
    }
    const categories:Category[] = data?.data.Result.recordset
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        console.log(values)
        const formData = new FormData()
        formData.append("imgfile", values.imgfile)
        formData.append("category", values.category)
        formData.append("content", values.content)
        formData.append("heading", values.head)
        axios.post("/news/add-news", formData, {headers:{"Content-Type":"multipart/form-data"}})
            .then((res)=>{
                setLoading(false)
                toast.success("Created News")
            })
            .catch((error)=>{
                toast.error("Internal Server Error Check Console for more Info abt the errror")
                console.error(error)
            })
            .finally(()=>{setLoading(false)})
    }
  return (
    <div>
        <section className='banner w-100 p-2'>
            <h2>Add News</h2>
        </section>
        <ToastContainer/>
        {loading ? <span>Loading...</span>:<section className='p-2'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="heading" className="form-label">News Headline</label>
                    <input type="text" onChange={e=>setValues({...values, head:e.target.value})} className="form-control" id="heading" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select className="form-select" onChange={e=>setValues({...values, category:e.target.value})} aria-label="Default select example" id='category' required>
                        {categories?.map(cart=>{
                            return <option key={cart.id} value={cart.id} defaultValue={1}>{cart.category}</option>
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">News Content</label>
                    <textarea className="form-control" onChange={e=>setValues({...values, content:e.target.value})} id="content" rows={3} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="newsimg" className="form-label">News Img</label>
                    <input className="form-control" accept='.png, .jpeg, .jpg' onChange={e=>setValues({...values, imgfile:e.target.files[0]})} type="file" id="newsimg" required/>
                </div>
                <div className="mb-3">
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </form>
        </section>}
    </div>
  )
}

export default AddNews