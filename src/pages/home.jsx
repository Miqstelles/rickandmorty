import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Personagem } from "../components/personagem";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";


export function Home() {
    const [pagina, setPagina] = useState(1)

    return (
        <div className="w-full h-full pb-[30px]">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <Personagem
                    pagina={pagina}
                    limite={9}
                />

                <div className="flex items-center gap-[20px] mt-[40px] font-JOCKEYONE font-bold text-[2rem] text-black select-none">
                    <button className={pagina === 1 && 'invisible'}><CaretLeft onClick={() => setPagina(pagina - 1)} className="w-[50px]" /></button>
                    <p>{pagina}</p>
                    <button className={pagina === 92 && 'invisible'}><CaretRight onClick={() => setPagina(pagina + 1)} className="w-[50px]" /></button>
                </div>
            </div>
        </div>
    )
}
