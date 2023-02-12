import ReactPlayer from 'react-player'

import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  console.log(item.thumbnailUrl)

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="movie-item button">
          <img
            alt="thumbnail"
            className="movie-item-img"
            src={item.thumbnailUrl}
          />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <button
            data-testid="closeButton"
            className="button"
            type="button"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <ReactPlayer url={item.videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
