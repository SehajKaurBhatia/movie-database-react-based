import './details.css'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'


const Details=()=>{
const navigate=useNavigate();
const location=useLocation();
const [Info,setInfo]=useState("");
const movieName=location.state?.movieName;
// const [movieName,setMovieName]=useState(null);
const apiKey="f7fac88a";
    useEffect(()=>{
        const fetchMovieData= async ()=> {
            try{
                 console.log("Fetching data for movie:", movieName);
        const response=await axios.get(
            "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + movieName + ""
        );
                 console.log("API Response:", response.data);
        setInfo(response.data);
            }
    catch(error){
        console.log("Error fetching data", error);
    }
    }
    if(movieName!==""){
        fetchMovieData();
    }
    }, [apiKey,movieName]);
    const handleGoBack=()=>{
        navigate("/");
    }
    return(
        <>
        <div className='heading'>
        <h1>Movies are:</h1>
        </div>
        <div className='details-container'>
       <div className='MovieContent'>
        {Info && Info.Search && Info.Search.map(movie=>(
             <div key={movie.imdbID} className='movie'>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
            </div>
        ))}
       </div>
       <button onClick={handleGoBack} className='goBack'>Go Back</button>
       </div>
        </>
    )
}
export default Details;
