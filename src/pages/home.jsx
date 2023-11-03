import { Navbar } from "../components/navbar";
import { Personagem } from "../components/personagem";


export function Home() {
    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <Personagem />
            </div>
        </div>
    )
}
