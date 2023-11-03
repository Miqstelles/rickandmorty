import axios from "axios";

export const PersonagensData = {
    id: Number,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: {
        name: String,
        url: String
    },
    location: {
        name: String,
        url: String
    },
    image: String,
    episode: Array,
    url: String,
    created: String
}

export const fetchPersonagem = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character/"
})
