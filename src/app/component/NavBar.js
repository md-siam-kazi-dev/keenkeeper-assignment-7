
import NavBarBtn from "./NavBarBtn"

const NavBar = () => {
  
  
  return (
    <nav className='nav-parent'>
        <div className='nav-child'>
           <h1 className='nav-heading'>Keen<span className='text-[#244D3F]'>Keeper</span></h1>
           <NavBarBtn />
        </div>
    </nav>
  )
}

export default NavBar