import logo from './GoogleLogo.svg'
import hamburger from './hamburger-menu.svg'

const NavSection = () => {
    return (
        <nav className="h-20 flex justify-between p-3 border-b-2 border-slate-800">
            <div className="basis-1/3 md:basis-1/4 flex">
                <img alt="hamburger menu" className="w-8" src={hamburger} />
                <img alt="google logo" className="w-32" src={logo} />
            </div>
            <div className="hidden md:flex basis-1/4 justify-center items-center">
                <div>English</div>
            </div>
        </nav>
    )
}

export default NavSection