import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EpisodioData, fetchEpisodio, fetchPersonagem, PersonagensData } from "../services/api";
import { House, Alien, Ghost, Heartbeat, Horse, Person, Robot, Skull, Virus } from "@phosphor-icons/react";

export function Personagem() {
    const { id } = useParams()

    const [personagem, setPersonagem] = useState(PersonagensData)
    const [episodiosUrl, setEpisodiosUrl] = useState([''])
    const [episodios, setEpisodios] = useState([EpisodioData])

    useEffect(() => {
        fetchPersonagem(id)
            .then(response => {
                const dadosPersonagens = response.data
                setPersonagem(dadosPersonagens)
            })
            .catch(error => console.error(error))
    }, [id])

    useEffect(() => {
        Object.keys(personagem.episode).forEach(function (key) {
            setEpisodiosUrl(prevUrls => [...prevUrls, personagem.episode[key]])
        })
    }, [personagem])

    useEffect(() => {
        async function fetchPersonagensAsync() {
            const ids = episodiosUrl.map(url => url.split('/').pop()).join(',')

            try {
                const response = await fetchEpisodio(`${ids}`)
                setEpisodios(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        if (episodiosUrl.length > 0) {
            fetchPersonagensAsync()
        }
    }, [episodiosUrl])

    return (
        <div className="grid w-full h-[100vh] md1:w-full md1:flex justify-center items-center md1:gap-[44px] p-[18px]">
            <div className="p-[20px] w-fit flex flex-col justify-center items-center h-[700px] border-[2px] border-black mt-[28px]">
                <img src={personagem.image} alt={personagem.name} title={personagem.name} className="rounded-full w-[300px] duration-100 hover:brightness-75" />
                <div className="ml-[8px] md1:ml-0 mt-[30px] font-JOCKEYONE text-black text-[24px]">
                    <p title={personagem.name} className="hover:text-pink">{personagem.name}</p>

                    <div className="flex gap-x-[12px] mb-[20px]">
                        <div className="flex items-center gap-[4px] text-[18px] hover:text-pink">
                            <p>{personagem.status}</p>
                            {personagem.status === "Alive" && <Heartbeat fill="#509140" size={32} />}
                            {personagem.status === "Dead" && <Skull fill="#E91C00" size={32} />}
                            {personagem.status === "unknown" && <Ghost size={32} fill="#000" />}
                        </div>

                        <div className="flex items-center gap-[4px] text-[18px] hover:text-pink">
                            {personagem.species === "Human" && <Person size={32} fill="#000" />}
                            {personagem.species === "Alien" && <Alien size={32} fill="#000" />}
                            {personagem.species === "Mythological Creature" && <Alien size={32} fill="#000" />}
                            {personagem.species === "Animal" && <Horse size={32} fill="#000" />}
                            {personagem.species === "Disease" && <Virus size={32} fill="#000" />}
                            {personagem.species === "Robot" && <Robot size={32} fill="#000" />}

                            <p>{personagem.species}</p>
                        </div>
                    </div>

                    <p className="hover:text-pink">Gênero: {personagem.gender}</p>
                    <p className="mb-[20px] hover:text-pink">Origem: {personagem.origin.name}</p>

                    <p className="text-[18px] text-gray-500">Ultima vez visto(a) em: </p>
                    <p className="hover:text-pink">{personagem.location.name}</p>

                    <Link to={'/'} className="w-[300px] duration-100 bg-red-400 hover:bg-red-500 mt-[40px] text-white rounded-[5px] flex items-center justify-center gap-[8px]">
                        <House /> Pagina Inicial
                    </Link>
                </div>
            </div>

            <div className="font-JOCKEYONE w-[300px] md1:w-[600px] h-[636px] overflow-y-scroll text-[38px] mt-[24px] scrollbar-thin scrollbar-thumb-green scrollbar-track-white  ">
                <p>{personagem.name} aparece nos episódios: </p>
                <div className="flex flex-wrap gap-[24px] scroll">
                    {episodios.length ? (
                        episodios.map(episodio => (
                            <Link to={`/Episodio/${episodio.id}`} key={episodio.id} className="hover:text-pink">
                                <div className="text-[28px]">{episodio.id} - {episodio.name}</div>
                            </Link>
                        ))
                    ) : (
                        <p>Carregando episodios...</p>
                    )}
                </div>
            </div>
        </div>
    )
}