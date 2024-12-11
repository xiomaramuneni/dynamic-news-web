import { useQuery } from '@tanstack/react-query'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BASE_URL} from "../api/axios"
import React from 'react'
import { fetchNews } from '../utils/data';
interface  INews {
  id:number;
  heading:string;
  imgfile:string,
  category:number,
  createdAt:string
  content:string
}
const Home:React.FC = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          spread:600,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  const {data,isLoading, error} =useQuery({
    queryKey:["news"],
    queryFn:()=>fetchNews()
  })
  
  if (isLoading) return <span>Loading...</span>
  if (error) return <span className='text-danger'>Internal Server Error</span>
  const news:INews[] = data?.data.Result.recordset
  const breakingNews = news?.filter(newz=>newz.category == 1)
  return (
    <div className='home'>
      <section id='' className='d-flex  '>
        <div className='container d-flex breaking-news-container'>
          <div className='breaking-news'>
            <h1>Breaking News</h1>
            <a>
              <div className='img-container'>
                <img src={`${BASE_URL}/news/${breakingNews[0]?.imgfile}`} alt="" />
              </div>
              <span>
                {breakingNews[0]?.heading}
              </span>
            </a>
          </div>
          <div className='container headline-container'>
            <h2>Top Headlines</h2>
            <div className='headlines'>
              {
                breakingNews.splice(1,).map(headline=>{
                  return <div key={headline.id}>
                    <div className='img-container'><img src={`${BASE_URL}/news/${headline?.imgfile}`} alt="" /></div>
                    <span>{headline.heading}</span>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </section>
      <section id='trending'>
        <h2>Trending</h2>
        <div className='container news-container slider-container' >
          <Slider {...settings}>
            {
              news?.filter((record)=> record.category == 2)?.map((trendingnews)=>{
                return (
                  <a href={`/news/${trendingnews.id}`} className='news-card' key={trendingnews.id}>
                    <div className='img-container'>
                      <img src={`${BASE_URL}/news/${trendingnews.imgfile}`} alt="nnn" />
                    </div>
                    <span>{trendingnews.heading}</span>
                  </a>
                )
              })
            }
            </Slider>
        </div>
      </section>
      <section id='sports'>
        <h2>Sports</h2>
        <div className='container news-container slider-container' >
          <Slider {...settings}>
            {
              news?.filter((record)=> record.category == 3)?.map((sports)=>{
                return (
                  <a href={`/news/${sports.id}`} className='news-card' key={sports.id}>
                    <div className='img-container'>
                      <img src={`${BASE_URL}/news/${sports.imgfile}`} alt="nnn" />
                    </div>
                    <span>{sports.heading}</span>
                  </a>
                )
              })
            }
            </Slider>
        </div>
      </section>
      <section id='education'>
        <h2>
          Eduction
        </h2>
        <div className='container news-container slider-container' >
          <Slider {...settings}>
            {
              news?.filter((record)=> record.category == 4)?.map((educationnews)=>{
                return (
                  <a href={`/news/${educationnews.id}`} className='news-card' key={educationnews.id}>
                    <div className='img-container'>
                      <img src={`${BASE_URL}/news/${educationnews.imgfile}`} alt="nnn" />
                    </div>
                    <span>{educationnews.heading}</span>
                  </a>
                )
              })
            }
            </Slider>
        </div>
      </section>
    </div>
  )
}

export default Home