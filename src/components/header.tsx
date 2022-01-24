import PEPE from '../img/pepe.png'

const Header = () => {
    return (
        <section id='header'>
            <div className="container px-4 mx-auto">
                <nav className="flex items-center py-6">
                    <a className="text-3xl font-semibold leading-none" href='#header'>
                        <img className="h-10" src={PEPE} alt="" width="auto"/>
                    </a>
                    
                    <ul className="lg:flex items-center space-x-12 ml-auto mr-12">
                        <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href='#navbar'>Home</a></li>
                        <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href='#about'>About</a></li>
                        <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href='#projects'>Projects</a></li>
                        <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href='#team'>Team</a></li>
                    </ul>
                </nav>
            </div>
            
        </section>
    );
}

export default Header;