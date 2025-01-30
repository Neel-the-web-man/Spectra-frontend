import { useNavigate } from "react-router";
import "./Home.css";
import { useState } from "react";

const ws = new WebSocket("ws://localhost:8001");

const Home = () => {
    const [searchInput, setSearchInput] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [children, setChildren] = useState([]);
    const [suggBoxVisible, setSuggBoxVisible] = useState(false);
    const [overlayState, setOverlayState] = useState(false);
    const navigate = useNavigate();

    ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        console.log(data);

        if (data.t == "autocreply") {
            console.log("reply");

            // show suggestions under search bar
            if (searchInput.length) {
                const childArr = [];
                data.data.forEach((s) => {
                    // console.log(s);

                    childArr.push(
                        <div
                            onClick={() => gotomov(s._id)}
                            id={s._id}
                            className="sugg"
                        >
                            <img src={s.poster || "thumb.webp"} alt="poster" />
                            <span>{s.title}</span>
                        </div>
                    );
                });
                setChildren(childArr);
            }

            // TODO: returns other languages also, filter based on language
        } else if (data.t == "inforeply" && data.data) {
            if (waiting) {
                const dt = data.data;
                navigate(`/movie/${dt._id}`, { state: data.data });
                console.log("redirected", waiting);
                setWaiting(false);
            }
        }
    };

    const handleSearch = (e) => {
        const currQuery = e.target.value;
        setSearchInput(currQuery);

        if (currQuery.length) {
            ws.send(JSON.stringify({ t: "autoc", data: currQuery }));
            console.log(currQuery, "sent");
        } else {
            setOverlayState(false);
            setChildren([]);
            setSearchInput("");
        }
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            setSuggBoxVisible(false);
            setOverlayState(false);
        }, 250);
    };

    const handleInputFocus = () => {
        setSuggBoxVisible(true);
        setOverlayState(true);
    };

    const handleSearchClick = () => {
        suggBoxVisible && children && gotomov(children[0].props.id);
    };

    const gotomov = (id) => {
        ws.send(JSON.stringify({ t: "info", data: id }));
        setWaiting(true);
        console.log("redirecting", id);
    };

    return (
        <>
        <div className="home-body">
            <div className="search-box">
                <div
                    className="input-sugg-box"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                >
                    <input
                        type="text"
                        placeholder="Enter"
                        onInput={handleSearch}
                        value={searchInput}
                    />

                    <div
                        className="sugg-box"
                        style={{ display: suggBoxVisible ? "initial" : "none" }}
                    >
                        {children}
                    </div>
                </div>
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <div
                className="overlay"
                style={{ display: overlayState ? "initial" : "none" }}
            ></div>
            <div className="movies-topic-heading">Action - Thriller</div>
            <div className="movies-cont">
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
            </div>
            <div className="movies-topic-heading">Romantic</div>
            <div className="movies-cont">
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
            </div>
            <div className="movies-topic-heading">Horror</div>
            <div className="movies-cont">
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
            </div>
            <div className="movies-topic-heading">Psycological - Thriller</div>
            <div className="movies-cont">
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
                <div className="movie-box">
                    <div className="movie-thumbnail"></div>
                    <div className="movie-subcont">
                        <div className="movie-name">Dilwale</div>
                        <div className="movie-yr"> 1995</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
