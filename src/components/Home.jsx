import "./Home.css";
import { useState } from "react";
const Home = () => {
    const ws = new WebSocket("ws://localhost:8000");
    const [SearchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const suggBox = document.querySelector("#sugg-box");
    ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);

        if (data.t == "autocreply") {
            // show suggestions under search bar
            setSuggestions(data.data);
            let htmld = "";
            data.data.forEach((s) => {
                htmld += `<div class="sugg"><img src=${s.poster || "thumb.webp"
                    } alt="poster" /><span>${s.title}</span></div>`;
            });
            if (SearchInput.length > 1) {
                suggBox.innerHTML = htmld;
                console.log(data.data);

            } else suggBox.innerHTML = ''
            // TODO: returns other languages also, filter based on language
        }
    };
    const handleSearch = async (e) => {
        setSearchInput(e.target.value);
        if (SearchInput.length) {
            console.log(SearchInput);
            ws.send(JSON.stringify({ t: "autoc", data: SearchInput }));
        }
        // else {
        //     suggBox.innerHTML = "";
        //     setSuggestions([]);
        // }
        // if (SearchInput.length <= 1) {
        //     suggBox.innerHTML = "";
        //     setSuggestions([]);
        // }
    };
    return (
        <>
        <div className="home-body">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter"
                    onInput={handleSearch}
                    value={SearchInput}
                    />
                <button>Search</button>
                <div id="sugg-box"></div>
            </div>
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
