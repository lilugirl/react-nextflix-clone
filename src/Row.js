import React,{useState,useEffect} from 'react'
import axios from './axios';
import'./Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'
const baseUrl="https://image.tmdb.org/t/p/original";


function Row({title,fetchUrl,isLargeRow}) {
  const [movies,setMovies]=useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");
 // console.log(fetchUrl);
  useEffect(()=>{
    // if [], run once when the row loads,and dont run again
    async  function fetchData(){
     const request=await axios.get(fetchUrl);
     setMovies(request.data.results);
    // console.log('request',request);
   }

   fetchData();

  },[fetchUrl]);

  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1
    }
  }



 const handleClick=(movie)=>{
   if(trailerUrl){
      setTrailerUrl("")
   }else{
     movieTrailer(movie?.name || "").then((url)=>{
       const urlParams= new  URLSearchParams(new URL(url).search) ;
       setTrailerUrl(urlParams.get('v'));
     }).catch((err)=>console.log(err));
   }

   console.log('trailerUrl',trailerUrl)

  }


  return (
    <div className="row">
     <h2>{title}</h2>
     <div className={`row__posters`}>
       {/* row__poster */}
       {movies.map(movie=>(
         <img onClick={()=>handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
       ))}
     </div>



      {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </div>
  )
}

export default Row
