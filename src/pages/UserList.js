import { Fragment, useContext } from "react"
import MemoryContext from "../API/MemoryContext"
import FilmCard from "../components/FilmCard"
import Grid from "../components/Grid"

const UserList = ({title, ctx}) => {
    let {memo} = useContext(MemoryContext)
    let films = (ctx === 'fav') ? memo.getFavs() : memo.getLater()
    return (
        <Fragment>
            <h1>{title}</h1>
            <Grid link="/decouvrir" linkText="rechercher de nouveaux films">
                {
                    films.map(
                        film => <FilmCard key={film.id} film={film} />
                    )
                }
            </Grid>
        </Fragment>
    )
}
export default UserList