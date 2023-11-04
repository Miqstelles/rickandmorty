import { CaretDown } from "@phosphor-icons/react";

export function Filtro() {
    return (
        <div className="w-full h-full flex justify-center items-center font-JOCKEYONE mt-[20px] gap-[40px] text-[34px]">
            <p className="text-[48px]">Filtrar por: </p>

            <button className="w-[200px] h-[80px] bg-green rounded-[10px] flex items-center justify-around">
                Status <CaretDown size={42} weight="duotone" />
            </button>

            <button className="w-[200px] h-[80px] bg-green rounded-[10px] flex items-center justify-around">
                Gênero <CaretDown size={42} weight="duotone" />
            </button>

            <button className="w-[200px] h-[80px] bg-green rounded-[10px] flex items-center justify-around">
                Espécie <CaretDown size={42} weight="duotone" />
            </button>
        </div>
    )
}