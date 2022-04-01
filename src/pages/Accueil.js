import { useEffect, useState } from 'react';
import ApiQuery from '../API/ApiQuery';
import FilmCard from '../components/FilmCard';
import Grid from '../components/Grid';
import NoResult from '../components/NoResult';
import Slider from '../components/Slider';

const Accueil = () => {
    let [today, setToday] = useState([])
    let [discover, setDiscover] = useState([])
    useEffect(
        () => {
            let api = new ApiQuery();
            api.trend().get()
                .then(response => (response) ? setToday(response.results) : setToday(false))
            api.discover().get()
                .then(response => (response) ? setDiscover(response.results) : setDiscover(false))
        }, []
    )
    return (
        <div>
            <h1>Page home</h1>

            {
                (today && today.length) &&
                    <Slider title="A la Une" filmList={today} />
            }
            {
                (discover && discover.length) &&
                    <Grid title="A découvrir" link="/decouvrir" linkText="Voir +">
                        {
                            discover.map(film => <FilmCard key={film.id} film={film} />)
                        }
                    </Grid>
            }
            {
                (!discover && !today) &&
                    <NoResult/>
            }

        </div>
    )
}

export default Accueil;