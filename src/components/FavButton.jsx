//MODULES
import { useContext } from 'react';
//CONTEXTS
import { MainContext } from '../context/MainContext';
//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const FavButton = ( {isFav , movieId}) => {
  const { addOrRemFromFavs } = useContext(MainContext);
  return (
    <button
    className={`absolute text-xl p-1 top-1 right-1 rounded-full  flex items-center ${isFav ? 'bg-purple-500' : 'bg-slate-900'}`}
    onClick={addOrRemFromFavs}
    data-movie-id={movieId}>
    <FontAwesomeIcon
      className='text-white h-3 w-auto'
      icon={faHeart}
    />
  </button>
  )
}

export default FavButton;
