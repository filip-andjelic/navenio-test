import React from "react";
import { Character } from "services/api.interfaces";
import "./CharacterDetails.scss";

interface Props {
    character: Character;
}

const CharacterDetails = ({ character: { name, gender, birth_year, height, mass, hair_color } }: Props) => {
    return (
        <div className="character-details">
            <h2 className="details-row">{name}</h2>
            <div className="details-row">
                <span>Gender</span>
                <span>{gender}</span>
            </div>
            <div className="details-row">
                <span>Birth year</span>
                <span>{birth_year}</span>
            </div>
            <div className="details-row">
                <span>Height</span>
                <span>{height}</span>
            </div>
            <div className="details-row">
                <span>Mass</span>
                <span>{mass}</span>
            </div>
            <div className="details-row">
                <span>Hair color</span>
                <span>{hair_color}</span>
            </div>
        </div>
    );
};

export default CharacterDetails;
