import rickandmortylogo from '../assets/rickandmorty_logo.png'
import rickandmortyhamburguermenu from '../assets/rickandmorty_hamburguer_menu.png'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Navbar() {
    return (
        <nav>
            <div className="flex justify-around items-center w-full h-[124px] bg-green">
                <img src={rickandmortyhamburguermenu} className="w-[78px]" />
                <img src={rickandmortylogo} className="w-[395px] h-[174px]" />
                <MagnifyingGlass size={68} fill='#FFF' />
            </div>
        </nav>
    )
}