import CharacterDetails from "Components/CharacterDetails/CharacterDetails";
import Header from "Components/Header/Header";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import React, { useState } from "react";
import { Character } from "services/api.interfaces";
import ApiService from "services/api.service";
import "./scss/main.scss";

const App = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    const handleSearch = (search) => {
        try {
            ApiService.getCharacters(search).then((res) => {
                setCharacters(res.results);
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="app">
            <Header></Header>
            <main>
                <SearchComponent handleSearch={handleSearch}></SearchComponent>
                <div className="characters-list">
                    {characters[0] &&
                        characters.map((char) => {
                            return <CharacterDetails character={char}></CharacterDetails>;
                        })}
                </div>
            </main>
        </div>
    );
};
export default App;
