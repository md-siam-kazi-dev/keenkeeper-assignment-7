
import NavBarBtn from "./NavBarBtn"

const NavBar = () => {
  
  
  return (
    <nav className='nav-parent fixed top-0 bg-white z-30'>
        <div className='nav-child '>
           <h1 className='nav-heading'>Keen<span className='text-[#244D3F]'>Keeper</span></h1>
           <NavBarBtn />
        </div>
    </nav>
  )
}

export default NavBar