import rickandmorty_through_portal from '../assets/rickandmorty_through_portal.png'

export function LoadingPage() {
    return (
        <div className="grid items-center justify-center gap-[128px]">
            <img src={rickandmorty_through_portal} className="w-[380px] mt-[38px]" />

            <p className="font-ALFASLAB text-[78px] text-center">INICIAR</p>
        </div>
    )
}