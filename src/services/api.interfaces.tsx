export interface CharacterResponse {
    count: number;
    next: string;
    pevious: string;
    results: Character[];
}

export interface Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    tarships: string[];
    created: string;
    edited: string;
    url: string;
}
