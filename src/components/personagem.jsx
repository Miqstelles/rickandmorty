import { useEffect, useState } from "react"
import { fetchPersonagem } from "../services/api"
import { useSelector, useDispatch } from 'react-redux'
import { setPageNumber } from "../redux/action";
import { PersonagensData } from "../services/api";
import { Person, Alien, Heartbeat, Skull, Ghost, Horse, Virus, Robot } from "@phosphor-icons/react";
import PropTypes from "prop-types";

export function Personagem(props) {
    const [personagens, setPersonagens] = useState([PersonagensData])
    const filtro = useSelector((state) => state.filters.filteredItems)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchPersonagem(`?page=${props.pagina}&name=&species=${filtro[0]}&gender=${filtro[1]}&status=${filtro[2]}`)
            .then(response => {
                const dadosPersonagens = response.data.results
                dispatch(setPageNumber(response.data.info.pages))
                setPersonagens(dadosPersonagens)
            })

            .catch(error => console.error(error))
    }, [props.pagina, filtro, dispatch])

    return (
        <div className="flex flex-wrap justify-center gap-[20px] mt-[24px]">
            {personagens.map(personagem => (
                <div className="w-[229px] h-[460px] md1:w-[580px] md3:w-[600px] md1:h-[220px] drop-shadow-2xl duration-[100ms] hover:bg-blue-200 border-[2px] border-blue-200" key={personagem.id}>
                    <div className="md1:flex gap-[20px]">
                        <img src={personagem.image} className="w-[229px] h-[216px]" alt={personagem.name} title={personagem.name} />

                        <div className="ml-[20px] md1:ml-0 mt-[30px] font-JOCKEYONE text-black text-[24px]">
                            <p title={personagem.name} className="hover:text-pink">{personagem.name}</p>

                            <div className="flex gap-x-[12px] mb-[30px]">
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

                            <p className="text-[18px] text-gray-500">Ultima vez visto(a) em: </p>
                            <p className="hover:text-pink">{personagem.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

Personagem.propTypes = {
    pagina: PropTypes.number,
    limite: PropTypes.number.isRequired
}
