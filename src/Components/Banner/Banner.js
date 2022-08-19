import React from 'react'
import './Banner.css'
import { API_KEY,imageUrl } from '../../constants/constants'
import {useEffect,useState} from 'react'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState()
 
  useEffect(() => {
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data);
    const results = response.data.results
    const newIndex = Math.floor(Math.random() * results.length)    
    setMovie(results[newIndex])
  })
  }, [])
  
  return (
    <div style={{ backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
  
    <div className='banner'>
   
        <div className='content'>
            <h1 className='title'>{movie ?movie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie? movie.overview:''} </h1>

        </div>
<div className="fade-bottom"></div>

    </div>
    </div>
  )
}

export default Banner