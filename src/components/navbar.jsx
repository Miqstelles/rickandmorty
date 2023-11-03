import rickandmortylogo from '../assets/rickandmorty_logo.png'

export function Navbar() {
    return (
        <nav>
            <div className="flex justify-center items-center w-full h-[124px] bg-green">
                <img src={rickandmortylogo} className="w-[395px] h-[174px]" />
            </div>
        </nav>
    )
}