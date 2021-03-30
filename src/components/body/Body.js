import React from 'react';
import '../../styles/styles.css';

const api_url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6035714427d8af477272a1cfd680cfd6';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(api_url)
      .then((res) => res.json)
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { items, isLoaded } = this.state;
    const image_path = 'https://image.tmdb.org/t/p/w1280';

    if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <>
          <div className="app">
            {items.map((item) => (
              <div className="movie">
                <img src={image_path + item.poster_path} alt={item.title} />
                <div class="movie-info">
                  <h3>${item.title}</h3>
                  {/* <span class="${getClassByrate(vote_average)}">${vote_average}</span> */}
                </div>
                <div class="overview">
                  <h3>${item.overview}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    }
  }
}

export default Body;
