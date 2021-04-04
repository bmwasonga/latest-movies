import React, {useState , useEffect} from 'react'
import axios from 'axios'
//attempt to import the styles
import './styles.js/styles.css'



//the below is information that is needed to full data from the movie db API
const api_url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6035714427d8af477272a1cfd680cfd6';
const search_url =
  'https://api.themoviedb.org/3/search/movie?api_key=6035714427d8af477272a1cfd680cfd6&query="';


//the above searc url will be used for the search function 


  function Body() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      axios
        .get(api_url)
        .then(res => {
          setMovies(res.data.results);
        })
        .catch((error) => console.log(error, "error"));
    }, []);
  
    return (
      <div className="movie-container">
        
        {movies.map((movie, idx) => {
        const image_path = 'https://image.tmdb.org/t/p/w1280';
          
          return (
            < > 
            <div className='movie' id={idx}> 
             <img src={image_path +movie.poster_path} alt={movie.title}/>
             <div className="movie-info">
               <h3  > {movie.title}</h3>
               <span className='voteaverage' > {movie.vote_average}</span>

             </div>
             <div className='overview' >
               <h3 >{movie.overview}</h3>
             </div>

            </div> 
            </>
          );
        })}
      </div>
    );
  }
  
  export default Body;