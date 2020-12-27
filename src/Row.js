import React,{useState,useEffect} from 'react'
import axios from './axios';
import'./Row.css';
const baseUrl="https://image.tmdb.org/t/p/original";


function Row({title,fetchUrl,isLargeRow}) {
  const [movies,setMovies]=useState([]);
 // console.log(fetchUrl);
  useEffect(()=>{
    // if [], run once when the row loads,and dont run again
    async  function fetchData(){
     const request=await axios.get(fetchUrl);
     setMovies(request.data.results);
    // console.log('request',request);
   }

   fetchData();

  },[fetchUrl])


  return (
    <div className="row">
     <h2>{title}</h2>
     <div className={`row__posters`}>
       {/* row__poster */}
       {movies.map(movie=>(
         <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${baseUrl}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
       ))}
     </div>

     {/*  */}


    </div>
  )
}

export default Row
