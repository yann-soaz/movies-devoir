import { Link } from 'react-router-dom';
import './Grid.css';

const Grid = (props) => {
    return (
        <div className="container">
            {
                props.title &&
                    <h2>{props.title}</h2>
            }
            <div className="Grid">
                {props.children}
            </div>
            {
                props.link &&
                    <Link className="btn" to={props.link}>{(props.linkText) ? props.linkText : props.link }</Link>
            }
        </div>
    )
}

export default Grid;