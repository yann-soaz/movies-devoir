import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import ApiQuery from "../API/ApiQuery";
import FilmCard from "../components/FilmCard";
import Grid from "../components/Grid";
import NoResult from "../components/NoResult";
import Pagination from "../components/Pagination";
import SearchForm from "../components/SearchForm";

const Discover = () => {

    let [filmList, setFilmList] = useState([])
    let [maxPage, setMaxPage] = useState(0)
    let [search, setSearch] = useSearchParams();
    let pageNumber = search.get('page');
    pageNumber = +(pageNumber)
    if (!pageNumber || isNaN(pageNumber))
        pageNumber = 1

    useEffect(
        () => {
            let api = new ApiQuery();
            api.discover(pageNumber)
            if (search.get('q'))
                api.queryContent(search.get('q'))
            api.get()
                .then(filmList => {
                    if (filmList) {
                        let {total_pages, results} = filmList
                        setMaxPage((+(total_pages) > 1000) ? 1000 : +(total_pages))
                        setFilmList(results)
                    } else {
                        setFilmList(false)
                    }
                })
        }, [search]
    )
    return (
        <div className="discover">
            <h1>Découvrir</h1>
            <SearchForm onUpdate={(query) => setSearch({q: query})} search={search.get('q')}/>
            {
                maxPage &&
                    <Pagination {...{maxPage, search, pageNumber}} />
            }
            <Grid>
                {   filmList ?
                        filmList.map(
                            film => <FilmCard key={film.id} film={film}/>
                        )
                    :
                        <NoResult/>
                }
            </Grid>
            {
                maxPage &&
                    <Pagination {...{maxPage, search, pageNumber}} />
            }
        </div>
    )
}
export default Discover