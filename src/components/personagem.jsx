import { useEffect, useState } from "react"
import { fetchPersonagem } from "../services/api"
import { PersonagensData } from "../services/api";
import { Person, Alien, Heartbeat, Skull, Ghost } from "@phosphor-icons/react";

export function Personagem() {
    const [personagens, setPersonagens] = useState([PersonagensData])
    const filteredItems = '1'

    useEffect(() => {
        fetchPersonagem('')
            .then(response => {
                const dadosPersonagens = response.data.results;
                setPersonagens(dadosPersonagens)
            })
            .catch(error => console.error(error))
    }, [filteredItems])

    return (
        <div className="grid md2:grid-cols-2 lg1:grid-cols-3 gap-[20px] mt-[24px]">
            {personagens.map(personagem => (
                <div className="md2:w-[580px] w-[600px] h-[220px] drop-shadow-2xl duration-[100ms] hover:bg-blue-200 border-[2px] border-blue-200" key={personagem.id}>
                    <div className="flex gap-[20px]">
                        <img src={personagem.image} className="w-[229px] h-[216px]" alt={personagem.name} title={personagem.name} />

                        <div className="mt-[30px] font-JOCKEYONE text-black text-[24px]">
                            <p title={personagem.name} className="hover:text-pink">
                                {personagem.name}
                            </p>

                            <div className="flex gap-x-[12px] mb-[30px]">
                                <div className="flex items-center gap-[4px] text-[18px] hover:text-pink">
                                    <p>{personagem.status}</p>
                                    {personagem.status === "Alive" && <Heartbeat fill="#509140" size={32} />}
                                    {personagem.status === "Dead" && <Skull fill="#E91C00" size={32} />}
                                    {personagem.status === "unknown" && <Ghost size={32} fill="#000" />}
                                </div>

                                <div className="flex items-center gap-[4px] text-[18px] hover:text-pink">
                                    {personagem.species === "Human" ? <Person size={32} fill="#000" /> : <Alien size={32} fill="#000" />}
                                    <p>{personagem.species}</p>
                                </div>
                            </div>

                            <p className="text-[18px] text-gray-500">Ultima vez visto(a) em: </p>
                            <p className="hover:text-pink">{personagem.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}