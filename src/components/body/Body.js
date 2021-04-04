import React, {useState , useEffect} from 'react'
import axios from 'axios'
//attempt to import the styles



//the below is information that is needed to full data from the movie db API
const api_url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6035714427d8af477272a1cfd680cfd6';
const image_path = 'https://image.tmdb.org/t/p/w1280';
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
        .catch((error) => console.log(error, "Error , please fix!"));
    }, []);
  
    return (
      <div className="movie_container">
        
        {movies.map((movie, i) => {
          return (
            <h2>
              <img
                src={image_path + movie.poster_path}
                alt="This is a movie"
                className="movie_here"
                key={i}
              />
              {movie.title}
            </h2>
          );
        })}
      </div>
    );
  }
  
  export default Body;