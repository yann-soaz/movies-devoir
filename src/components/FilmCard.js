import ApiQuery from "../API/ApiQuery";
import {FiHeart, FiPlusCircle, FiBookmark} from 'react-icons/fi'
import './FilmCard.css'
import { useContext } from "react";
import MemoryContext from "../API/MemoryContext";

const FilmCard = ({film}) => {
    const {memo, update} = useContext(MemoryContext);
    const {original_title, poster_path, vote_average} = film
    return (
        <div className="FilmCard">
            <img src={ApiQuery.poster(poster_path, 3)} alt={original_title}/>
            <h3>{original_title}</h3>
            <span className="filmNote"><FiHeart /> {vote_average}
                <span className="actions">
                    <span   className={(memo.inLater(film)) ? 'active' : '' } 
                            onClick={() => update(film, 'later')} 
                            title="a voir"><FiPlusCircle /></span>
                    <span   className={(memo.inFav(film)) ? 'active' : '' } 
                            onClick={() => update(film, 'favs')} 
                            title="favoris"><FiBookmark /></span>
                </span>
            </span>
        </div>
    )
}

export default FilmCard;