import { Personagem } from "../components/personagem";


export function Home() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col justify-center items-center">
                <Personagem />
            </div>
        </div>
    )
}
