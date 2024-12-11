import { useQuery } from '@tanstack/react-query'
import React from 'react'
import {formatDistance} from "date-fns"
import { useParams } from 'react-router-dom'
import { fetchNewsById } from '../../../utils/data'
import { BASE_URL } from '../../../api/axios'
interface  INews {
    id:number;
    heading:string;
    imgfile:string,
    category:number,
    createdAt:string
    content:string
  }
const NewsArticle: React.FC = () => {
    const {id} = useParams()
    const {data,isLoading,error} = useQuery({
        queryKey:["news", id],
        queryFn: ()=>fetchNewsById(id)
    })
    if (isLoading) return <span>Loading</span>
    if (error){
        console.error(error)
        return <span>Internal Server Error</span>
    }
    const newsarticle:INews = data?.data.Result[0]
  return (
    <div className='news-article'>
        <section>
            <div className='image-container'>
                <img src={`${BASE_URL}/news/${newsarticle.imgfile}`} alt=''/>
            </div>
            <div className='content'>
                <span>{newsarticle.heading}</span>
                <pre>
                    <p>{newsarticle.content}</p>
                </pre>
                <small>{formatDistance(new Date(newsarticle.createdAt), new Date, {addSuffix:true})}</small>
            </div>
        </section>
    </div>
  )
}

export default NewsArticle