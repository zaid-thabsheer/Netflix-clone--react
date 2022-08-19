import React from 'react'
import Youtube from 'react-youtube'
import './RowPoster.css'
import {useEffect,useState} from 'react'
import axios from '../../axios'
import { imageUrl,API_KEY} from '../../constants/constants'

function RowPoster(props) {
  const [movie,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
   axios.get(props.url).then((res)=>{
    console.log(res.data);
    setMovies(res.data.results)
   }).catch((err)=>{
    alert('Network error')
   })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
     if(res.data.results.length!==0){
      setUrlId(res.data.results[1])
     }
    })

  }
  
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className='posters'>
          {movie.map((obj)=>
            <img onClick={()=>handlemovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

          )}
       
        </div>
      {urlId &&  <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPoster