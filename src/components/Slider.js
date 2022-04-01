import FilmCard from "./FilmCard"
import './Slider.css'

const Slider = ({title, filmList}) => {
    return (
        <section className="Slider container">
            <h2>{title}</h2>
                <div className="innerSlider">
                    {
                        filmList.map(film => <FilmCard key={film.id} film={film}/>)
                    }
                </div>
        </section>
    )
}

export default Slider;