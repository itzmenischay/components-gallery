import React from 'react'
import { Link } from 'react-router-dom';
import reactLogo from '../../assets/logo-react.png';
import "./Navbar.css"
import HoverButton from '../../elements/HoverButton';

const Navbar = (props) => {
  
  return (
    <nav className="text-white flex justify-between items-center h-20 px-10 py-2 sticky top-6 mx-20 backdrop-blur-3xl bg-white/10 rounded-2xl z-50">
      <div className="logo flex items-center gap-4">
        <Link to="/" className="flex items-center gap-4">
          <img className='spin' src={reactLogo} alt="React Logo" width={40} height={30} />
          <h1 className="text-2xl ">Components Gallery</h1>
        </Link>
      </div>
      <div>
        <ul className='flex flex-row items-center gap-6 text-sm'>
          <Link to="/"><button className='hover:bg-gray-700 px-4 py-2 rounded-full transition-all cursor-pointer'>Home</button></Link>
          <Link to="/components"><button className='hover:bg-gray-700 px-4 py-2 rounded-full transition-all cursor-pointer'>Components</button></Link>
          <Link to="/backgrounds"><button className='hover:bg-gray-700 px-4 py-2 rounded-full transition-all cursor-pointer'>Backgrounds</button></Link>
          <Link to="/testing"><button className='hover:bg-gray-700 px-4 py-2 rounded-full transition-all cursor-pointer'>Testing</button></Link>
          <Link to="/contact"><button className='hover:bg-gray-700 px-4 py-2 rounded-full transition-all cursor-pointer'>Contact</button></Link>
          <Link to='https://github.com/dashboard' target='_blank'><HoverButton label='GitHub'/></Link>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
