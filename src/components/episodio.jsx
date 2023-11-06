import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EpisodioData, PersonagensData, fetchEpisodio, fetchPersonagem } from "../services/api";
import { EpisodioSkeleton } from "./Skeletons/EpisodioSkeleton";

export function Episodio() {
    const { id } = useParams()

    const [episodio, setEpisodio] = useState(EpisodioData)
    const [personagensUrl, setPersonagensUrl] = useState([])
    const [personagens, setPersonagens] = useState([PersonagensData])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchEpisodio(id)
            .then(response => {
                setEpisodio(response.data)
                setLoading(false)
            })
            .catch(error => console.error(error))
    }, [id])

    useEffect(() => {
        Object.keys(episodio.characters).forEach(function (key) {
            setPersonagensUrl(prevUrls => [...prevUrls, episodio.characters[key]]);
        })
    }, [episodio])

    useEffect(() => {
        async function fetchPersonagensAsync() {
            const ids = personagensUrl.map(url => url.split('/').pop()).join(',')

            try {
                const response = await fetchPersonagem(`${ids}`)
                setPersonagens(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        if (personagensUrl.length > 0) {
            fetchPersonagensAsync()
        }
    }, [personagensUrl])

    return (
        <div className="w-full grid justify-center font-JOCKEYONE pb-[80px]">,
            <div className="flex justify-center text-[38px] gap-[18px] mt-[28px]">
                <p>{episodio.episode}</p>
                <p>{episodio.name}</p>
            </div>

            <div className="mt-[44px]">
                <p className="text-[32px] text-center mb-[24px]">Personagens:</p>
                <div className="flex flex-wrap gap-[24px] justify-center">
                    {loading &&
                        Array.from(Array(20), (_, i) =>
                            <EpisodioSkeleton key={i} />
                        )
                    }

                    {!loading && personagens.length > 0 && (
                        personagens.map(personagem => (
                            <Link to={`/Personagem/${personagem.id}`} key={personagem.id}>
                                <div className="text-[28px] w-[300px]">{personagem.name}</div>
                                <img src={personagem.image} alt={personagem.name} title={personagem.name} className="duration-100 hover:brightness-75" />
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}