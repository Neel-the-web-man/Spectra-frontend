import "./Home.css";
import { useState } from "react";
const Home = () => {
    const ws = new WebSocket("ws://localhost:8000");
    const [SearchInput, setSearchInput] = useState("");
    ws.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        console.log(data);
        
    }
    const handleSearch = async (e) => {
        setSearchInput(e.target.value);
        ws.send(JSON.stringify({ t: "autoc", data: e.target.value }));
    };
    return (
        <div className="home-body">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Enter"
                    onChange={handleSearch}
                    value={SearchInput}
                />
                <button>Search</button>
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
    );
};

export default Home;
