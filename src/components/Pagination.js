import { Link } from "react-router-dom"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import './Pagination.css'

const Pagination = ({pageNumber, maxPage, search}) => {
    let base_url = '';
    for (let param of search.entries()) {
        if (param[0] === 'page')
            continue
        base_url += ((base_url === '') ? '?' : '&' )+param[0]+'='+param[1]
    }
    let prevLink = (pageNumber > 1) ?((base_url === '') ? '?' : base_url+'&')+'page='+(pageNumber - 1) :  false
    let nextLink = (pageNumber < maxPage) ? ((base_url === '') ? '?' : base_url+'&')+'page='+(pageNumber + 1) :  false
    return (
        <div className="Pagination container">
            {
                prevLink ?
                    <Link className="btn" to={prevLink}>
                        <FiArrowLeft />
                        Page précédente
                    </Link>
                :
                    <span className="btn disabled">
                        <FiArrowLeft />
                        Page précédente
                    </span>
            }
            <span>
                {pageNumber} / {maxPage}
            </span>
            {
                nextLink ?
                    <Link className="btn" to={nextLink}>
                        Page suivante
                        <FiArrowRight/>
                    </Link>
                :
                    <span className="btn disabled">
                        Page suivante
                        <FiArrowRight/>
                    </span>

            }
        </div>
    )
}

export default Pagination