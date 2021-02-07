import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios"
import SwiperCore, { Navigation, Pagination,Autoplay} from 'swiper';
import "swiper/swiper-bundle.css"
import ReactLoading from 'react-loading';
// const api_key="dee07bdd8963f0455f28746f0c0539f7"
// const link = axios.get(`https://api.themoviedb.org/3/movie/${id}?${api_key}&language=en-US`)
// const img = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
{/* <SwiperSlide key={movie.title} className="swiper-slide-container">
       <img className="header-img" src={} alt=""/>
        <div className="shade"></div>
        <div className="slide-info-card">
                  <p>Latest</p>
                  <h3>{movie.title}</h3>
                  <p>{movie.genres[0].name} | Rating {movie.vote_average}</p>
        </div>
      </SwiperSlide> */}
SwiperCore.use([Pagination,Navigation,Autoplay,])
// /2M2JxEv3HSpjnZWjY9NOdGgfUd.jpg
const Header = () => {
  const [movie1,setMovie1] = useState({"genres":[{}]})
  const [movie2,setMovie2] = useState({"genres":[{}]})
  const [movie3,setMovie3] = useState({"genres":[{}]})
  useEffect(async()=>{
   await axios.get(`https://api.themoviedb.org/3/movie/553604?api_key=dee07bdd8963f0455f28746f0c0539f7&language=en-US`)
    .then(res=>{setMovie1(res.data); })
       await axios.get(`https://api.themoviedb.org/3/movie/604822?api_key=dee07bdd8963f0455f28746f0c0539f7&language=en-US`)
    .then(res=>{setMovie2(res.data); })
   await axios.get(`https://api.themoviedb.org/3/movie/529203?api_key=dee07bdd8963f0455f28746f0c0539f7&language=en-US`)
    .then(res=>{setMovie3(res.data); })

  },[])


 return (
  <header className="header">
    {!movie1?<ReactLoading type="balls" color="red" height={'20%'} width={'20%'} />
:   
  <div>
    <Swiper pagination={{type:"progressbar"}} loop autoplay>
      <SwiperSlide className="swiper-slide-container">
       <img className="header-img" src={`https://image.tmdb.org/t/p/original/${movie1.backdrop_path}`} alt=""/>
        <div className="shade"></div>
        <div className="slide-info-card">
                  <p>Latest</p>
                  <h3>{movie1.title}</h3>
                  <p>{movie1.genres[0].name} | Rating {movie1.vote_average}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide-container">
       <img className="header-img" src={`https://image.tmdb.org/t/p/original/${movie2.backdrop_path}`} alt=""/>
        <div className="shade"></div>
        <div className="slide-info-card">
                  <p>Latest</p>
                  <h3>{movie2.title}</h3>
                  <p>{movie2.genres[0].name} | Rating {movie2.vote_average}</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide-container">
       <img className="header-img" src={`https://image.tmdb.org/t/p/original/${movie3.backdrop_path}`} alt=""/>
        <div className="shade"></div>
        <div className="slide-info-card">
                  <p>Latest</p>
                  <h3>{movie3.title}</h3>
                  <p>{movie3.genres[0].name} | Rating {movie3.vote_average}</p>
        </div>
      </SwiperSlide>

    </Swiper>

  </div>}
  </header> 
)
}

export default Header
