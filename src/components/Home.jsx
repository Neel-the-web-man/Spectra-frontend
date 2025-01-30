import "./Home.css";
import { useState } from "react";
const Home = () => {
    const ws = new WebSocket("ws://localhost:8000");
    const [searchInput, setSearchInput] = useState("");
    const [children, setChildren] = useState([]);
    const [suggBoxVisible, setSuggBoxVisible] = useState(false);
    const [overlayState, setOverlayState] = useState(false);

    ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);

        if (data.t == "autocreply") {
            console.log("reply");

            // show suggestions under search bar
            if (searchInput.length) {
                const childArr = [];
                data.data.forEach((s) => {
                    childArr.push(
                        <a className="sugg">
                            <img src={s.poster || "thumb.webp"} alt="poster" />
                            <span>{s.title}</span>
                        </a>
                    );
                });
                setChildren(childArr);
            }

            // TODO: returns other languages also, filter based on language
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
        setSuggBoxVisible(false);
        setOverlayState(false);
    };

    const handleInputFocus = () => {
        setSuggBoxVisible(true);
        setOverlayState(true);
    };

    const handleSearchClick = () => {
        children[0].click();
    };

    return (
        <div className="home-body">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter"
                    onInput={handleSearch}
                    value={searchInput}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                />
                <button onClick={handleSearchClick}>Search</button>
                <div
                    id="sugg-box"
                    style={{ display: suggBoxVisible ? "initial" : "none" }}
                >
                    {children}
                </div>
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
    );
};

export default Home;
