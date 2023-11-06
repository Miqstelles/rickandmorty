import { CaretDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setFilteredItem } from "../redux/action";

export function Filtro() {
    const [especie, setEspecie] = useState('')
    const [genero, setGenero] = useState('')
    const [status, setStatus] = useState('')

    const handleEspecieChange = (especieSelecionada) => setEspecie(especie === especieSelecionada ? '' : especieSelecionada)
    const handleGeneroChange = (generoSelecionado) => setGenero(genero === generoSelecionado ? '' : generoSelecionado)
    const handleStatusChange = (statusSelecionado) => setStatus(status === statusSelecionado ? '' : statusSelecionado)

    const dispatch = useDispatch()


    useEffect(() => {
        const combinedtItems = [especie, genero, status]
        dispatch(setFilteredItem(combinedtItems));
    }, [dispatch, especie, genero, status]);


    const [isOpen, setIsOpen] = useState(0)

    return (
        <div className="w-full h-full flex flex-wrap justify-center items-center font-JOCKEYONE mt-[20px] gap-[40px] text-[34px]">
            <p className="text-[48px]">Filtrar por: </p>

            <div className="relative">
                <button
                    className={`w-[200px] h-[80px] bg-green rounded-t-[10px] flex items-center justify-around`}
                    onClick={() => setIsOpen(isOpen === 1 ? 0 : 1)}
                >
                    Espécie <CaretDown size={42} weight="duotone" />
                </button>

                <div
                    className={
                        `absolute z-10 w-full bg-green  gap-[18px] transition-all ${isOpen === 1 ? 'h-[264px] rounded-b-[10px]' : 'h-0 rounded-b-[10px] overflow-hidden'}`
                    }
                >
                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Humano"
                            checked={especie === 'human'}
                            onChange={() => handleEspecieChange('human')}
                        />

                        <label className="text-[24px]">Humano</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Humanoid"
                            checked={especie === 'humanoid'}
                            onChange={() => handleEspecieChange('humanoid')}
                        />

                        <label className="text-[24px]">Humanoid</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            value="Alien"
                            checked={especie === 'alien'}
                            onChange={() => handleEspecieChange('alien')}
                        />

                        <label className="text-[24px]">Alien</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            value="Animal"
                            checked={especie === 'animal'}
                            onChange={() => handleEspecieChange('animal')}
                        />

                        <label className="text-[24px]">Animal</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            value="Robô"
                            checked={especie === 'robot'}
                            onChange={() => handleEspecieChange('robot')}
                        />

                        <label className="text-[24px]">Robô</label>
                    </div>
                </div>
            </div>

            <div className="relative">
                <button
                    className={`w-[200px] h-[80px] bg-green rounded-t-[10px] flex items-center justify-around`}
                    onClick={() => setIsOpen(isOpen === 2 ? 0 : 2)}
                >
                    Gênero <CaretDown size={42} weight="duotone" />
                </button>

                <div
                    className={
                        `absolute z-10 w-full bg-green  gap-[18px] transition-all ${isOpen === 2 ? 'h-[224px] rounded-b-[10px]' : 'h-0 rounded-b-[10px] overflow-hidden'}`
                    }
                >
                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Masculino"
                            checked={genero === 'male'}
                            onChange={() => handleGeneroChange('male')}
                        />
                        <label className="text-[24px]">Masculino</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Feminino"
                            checked={genero === 'female'}
                            onChange={() => handleGeneroChange('female')}
                        />
                        <label className="text-[24px]">Feminino</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Sem Gênero"
                            checked={genero === 'genderless '}
                            onChange={() => handleGeneroChange('genderless ')}
                        />
                        <label className="text-[24px]">Sem Gênero</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Desconhecido"
                            checked={genero === 'unknown'}
                            onChange={() => handleGeneroChange('unknown')}
                        />
                        <label className="text-[24px]">Desconhecido</label>
                    </div>
                </div>
            </div>

            <div className="relative">
                <button
                    className={`w-[200px] h-[80px] bg-green rounded-t-[10px] flex items-center justify-around`}
                    onClick={() => setIsOpen(isOpen === 3 ? 0 : 3)}
                >
                    Status <CaretDown size={42} weight="duotone" />
                </button>

                <div
                    className={
                        `absolute z-10 w-full bg-green  gap-[18px] transition-all ${isOpen === 3 ? 'h-[164px] rounded-b-[10px]' : 'h-0 rounded-b-[10px] overflow-hidden'}`
                    }
                >
                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Vivo"
                            checked={status === 'alive'}
                            onChange={() => handleStatusChange('alive')}
                        />
                        <label className="text-[24px]">Vivo(a)</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Morto"
                            checked={status === 'dead'}
                            onChange={() => handleStatusChange('dead')}
                        />
                        <label className="text-[24px]">Morto(a)</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Desconhecido"
                            checked={status === 'unknown'}
                            onChange={() => handleStatusChange('unknown')}
                        />
                        <label className="text-[24px]">Desconhecido</label>
                    </div>
                </div>
            </div>
        </div>
    )
}