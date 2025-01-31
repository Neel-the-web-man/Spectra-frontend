import { useState } from "react";
import { useParams, useLocation } from "react-router";
import "./Movinfo.css";
// import { useState } from "react";
// import ws from '../App'

const Movinfo = () => {
    // const { id } = useParams();
    const location = useLocation();
    const movie = location.state;
    // ws

    return (
        <div className="movinfo">
            <h1>{movie.title}</h1>
            <div className="content">
                <div className="left">
                    <div className="img-overlay">
                        <div className="play-box">
                            <div className="play-btn"></div>
                        </div>
                    </div>
                    <img src={movie.poster || "/thumb.webp"} alt="" />
                </div>
                <div className="right">
                    <div className="inf">
                        <span className="hl">Genres:</span>{" "}
                        <ul className="list">
                            {movie.genres.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="inf">
                        <span className="hl">Languages:</span>
                        <ul className="list">
                            {movie.languages.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="inf">
                        <span className="hl">Released:</span> {movie.year}
                    </div>
                    <div className="inf">
                        <span className="hl">Cast:</span>
                        <ul className="list">
                            {movie.cast.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="inf">
                        <span className="hl">Directed by:</span>
                        <ul className="list">
                            {movie.directors.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="inf">
                        <span className="hl">IMDb rating:</span>{" "}
                        {movie.imdb.rating} ({movie.imdb.votes} votes)
                    </div>
                    {movie.fullplot ? (
                        <div className="inf">
                            <span className="hl">Plot:</span> {movie.fullplot}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Movinfo;
