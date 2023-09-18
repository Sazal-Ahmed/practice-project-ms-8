import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu , AiOutlineCloseSquare } from 'react-icons/ai';

const Navbar = () => {

    const [open,setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        {id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
      ];
      


    return (
        
            <nav className="bg-rose-200 p-6 text-black">
             <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineCloseSquare className="text-2xl"></AiOutlineCloseSquare> 
                    : <AiOutlineMenu className="2xl"/>
                }
                
             </div>
             <ul className={`md:flex bg-rose-200 absolute duration-1000 md:static
            :
                ${open ? 'top-16': '-top-60'}
             px-6`}>
             {
                 routes.map(route => <Link key={route.id} route={route}></Link>)
              }
             </ul>
            </nav>
    
    );
};

export default Navbar;