import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";
import { Personagem } from "../components/personagem";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Filtro } from "../components/filtro";
import { useSelector } from "react-redux";


export function Home() {
    const [pagina, setPagina] = useState(1)

    const filtro = useSelector((state) => state.filters.filteredItems)
    const numPaginas = useSelector((state) => state.filters.pageNumber)

    useEffect(() => {
        setPagina(1)
    }, [numPaginas, filtro])

    return (
        <div className="w-full h-full pb-[30px]">
            <Navbar />
            <Filtro />
            <div className="flex flex-col justify-center items-center">
                <Personagem
                    pagina={pagina}
                    limite={9}
                />

                <div className="flex items-center gap-[20px] mt-[40px] font-JOCKEYONE font-bold text-[2rem] text-black select-none">
                    <button className={pagina === 1 && 'invisible'}><CaretLeft onClick={() => setPagina(pagina - 1)} className="w-[50px]" /></button>
                    <p>{pagina}</p>
                    <button className={pagina === numPaginas && 'invisible'}><CaretRight onClick={() => setPagina(pagina + 1)} className="w-[50px]" /></button>
                </div>
            </div>
        </div>
    )
}
