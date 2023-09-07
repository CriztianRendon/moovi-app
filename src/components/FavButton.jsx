//MODULES
import { useContext } from 'react';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const FavButton = ( {isFav , movieId, className}) => {
  const { addOrRemFromFavs } = useContext(MainContext);
  return (
    <button
    className={`rounded-full flex items-center ${className} ${isFav ? 'bg-purple-500' : 'bg-slate-900'}`}
    onClick={addOrRemFromFavs}
    data-movie-id={movieId}>
    <FontAwesomeIcon
      className='text-white'
      icon={faHeart}
    />
  </button>
  )
}

export default FavButton;
