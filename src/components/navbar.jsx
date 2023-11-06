import rickandmortylogo from '../assets/rickandmorty_logo.png'
import { MagnifyingGlass } from '@phosphor-icons/react'

export function Navbar() {
    return (
        <nav>
            <div className="flex justify-center gap-[128px] items-center w-full h-[144px] bg-green">
                <img src={rickandmortylogo} className="w-[395px] h-[144px] hidden md1:flex" />
                <MagnifyingGlass size={68} fill='#FFF' />
            </div>
        </nav>
    )
}