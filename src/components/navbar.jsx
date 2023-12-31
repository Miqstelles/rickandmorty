import { Link } from 'react-router-dom'
import rickandmortylogo from '../assets/rickandmorty_logo.png'

export function Navbar() {
    return (
        <nav>
            <div className="flex justify-center gap-[128px] items-center w-full h-[144px] bg-green">
                <Link to={'/'}><img src={rickandmortylogo} className="w-[395px] h-[144px] hidden md1:flex" /></Link>
            </div>
        </nav>
    )
}