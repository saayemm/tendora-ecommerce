import { NavLink , Link} from 'react-router'
import logo from '../assets/logo.png'
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [visible, setVisible] = useState(false)

  return (
    <div className="flex items-center 
    justify-between mx-auto py-4 px-8 fixed z-999 w-full bg-[#ffffff66] max-w-[1240px]">
        <div className='max-w-[160px]'>
           <Link to='/'> <img src={logo} alt="" /></Link>
        </div>

        <div>
            <ul className='hidden md:flex gap-5 text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-full border-none h-[1px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-full border-none h-[1px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-full border-none h-[1px] bg-gray-700 hidden'/>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-full border-none h-[1px] bg-gray-700 hidden'/>
                </NavLink>
            </ul>
        </div>

        <div className='flex gap-4 items-center'>
            <span className='text-2xl cursor-pointer'><IoIosSearch /></span>
            <Link to='/cart' className='text-2xl relative'>
                <span><BsCart2 /></span>
                <p className='text-[10px] absolute right-[-5px] bottom-[1px] w-4 bg-black text-white text-center rounded-full'>3</p>
            </Link>
            <div className='group relative'>
                 <span className='text-xl cursor-pointer'><CgProfile /></span>
                 <div className='group-hover:block hidden absolute dropdown right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 px-8 py-4 bg-slate-200 text-gray-500 rounded-xl'>
                        <p className='cursor-pointer hover:text-black'>Profile</p>
                        <p className='cursor-pointer hover:text-black'>Order</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <div className='cursor-pointer'>
                <span onClick={()=>setVisible(true)} className='md:hidden text-3xl'><FiMenu /></span>
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white 
                transition-all ${visible ? "w-full" : "w-0"}`}>
                <div className='flex flex-col text-gray-600 p-4'>
                    <div className='flex items-center gap-4'>
                        <span onClick={()=>setVisible(false)} className='md:hidden text-3xl cursor-pointer'><IoClose /></span>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className="border-b border-b-gray-400 text-xl m-2 font-medium" to='/'>Home</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="border-b border-b-gray-400 text-xl m-2 font-medium" to='/about'>About</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="border-b border-b-gray-400 text-xl m-2 font-medium" to='/collection'>Collection</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="border-b border-b-gray-400 text-xl m-2 font-medium" to='/contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar