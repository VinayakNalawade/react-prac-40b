import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="mainContainer">
      <img
        className="main-img"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <div className="video-section">
        <h1 className="movie-heading">Action Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(each => each.categoryId === 'ACTION')}
        />
        <h1 className="movie-heading">Comedy Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(each => each.categoryId === 'COMEDY')}
        />
      </div>
    </div>
  )
}

export default PrimeVideo
