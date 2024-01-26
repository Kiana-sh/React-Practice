import { Fragment, useEffect, useState } from "react";
import api from "../../Utils/api";
import "./style.css";
import { Link } from "react-router-dom";


export default function MovieList(props) {
    const {apiUrl, genreTitle} = props;
    const [movieData, setMovieData] = useState({
        data : [],
        metadata: {
            current_page: 1,
            per_page: 2,
            page_count: 25,
            total_count: 250
            },
    })
    useEffect(() => {
        api.get(apiUrl)
        .then(function(response) {
            setMovieData(response.data);
        })
        .catch(function(error) {})
    }, []);
    const renderList = () => {
        return movieData.data.map(({id, poster, title, genres})=> {
            return(
                <li className="li" key={id}>
                    <Link to={`/series/${id}`}>
                        <img className="poster" src={poster} />
                    </Link>
                    <Link to={`/series/${id}`} className="title-link">
                        <h4>{title}</h4>
                    </Link>
                    <p className="genre">{genres.join(" . ")}</p>
                </li>
            );
        });
    }
    return(
        <Fragment>
            <div className="container">
                <h1>{genreTitle}</h1>
                <ul className="list">
                    {renderList()}
                </ul>
            </div>
        </Fragment>
    );
}