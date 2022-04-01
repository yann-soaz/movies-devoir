import { useState } from "react"
import {FiX, FiSearch} from 'react-icons/fi'

import './SearchForm.css'

const SearchForm = ({onUpdate, search}) => {
    let [query, setQuery] = useState((search) ? search : '' )

    const reset = () => {
        onUpdate('')
        setQuery('')
    }
    return (
        <form className="SearchForm container" onSubmit={(e) => {e.preventDefault(); onUpdate(query)}}>
            <div className="searchInput">
                <input placeholder="Film recherché" type="text" value={query} onChange={(e) => {setQuery(e.target.value); onUpdate(query)}} />
                <span onClick={() => reset()}>
                    <FiX />
                </span>
            </div>
            <button type="submit">
                <FiSearch />
            </button>
        </form>
    )
}

export default SearchForm