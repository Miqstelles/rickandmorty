import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export function Filtro() {
    const [especie, setEspecie] = useState('')
    const [genero, setGenero] = useState('')
    const [status, setStatus] = useState('')

    const handleEspecieChange = (especieSelecionada) => setEspecie(especieSelecionada)
    const handleGeneroChange = (generoSelecionado) => setGenero(generoSelecionado)
    const handleStatusChange = (statusSelecionado) => setStatus(statusSelecionado)

    const [isOpen, setIsOpen] = useState(0)

    console.log(especie)
    return (
        <div className="w-full h-full flex justify-center items-center font-JOCKEYONE mt-[20px] gap-[40px] text-[34px]">
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
                        `absolute z-10 w-full bg-green  gap-[18px] transition-all ${isOpen === 1 ? 'h-[124px] rounded-b-[10px]' : 'h-0 rounded-b-[10px] overflow-hidden'}`
                    }
                >
                    <div className="space-x-[18px] ml-[18px]">
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="Humano"
                            checked={especie === 'humano'}
                            onChange={() => handleEspecieChange('humano')}
                        />

                        <label className="text-[24px]">Humano</label>
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
                        <input className="checkbox" type="checkbox" value="Humano" />
                        <label className="text-[24px]">Masculino</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input className="checkbox" type="checkbox" value="Humano" />
                        <label className="text-[24px]">Feminino</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input className="checkbox" type="checkbox" value="Humano" />
                        <label className="text-[24px]">Sem Gênero</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input className="checkbox" type="checkbox" value="Humano" />
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
                        <input className="checkbox" type="checkbox" value="Humano" />
                        <label className="text-[24px]">Vivo(a)</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input className="checkbox" type="checkbox" value="Humano" />
                        <label className="text-[24px]">Morto(a)</label>
                    </div>

                    <div className="space-x-[18px] ml-[18px]">
                        <input className="checkbox" type="checkbox" value="Humano" />
                        <label className="text-[24px]">Desconhecido</label>
                    </div>
                </div>
            </div>
        </div>
    )
}