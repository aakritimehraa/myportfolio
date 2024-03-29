import React, { useState } from 'react'
import Toggle from '../toggle.js'
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from '../themeContext.js';
import { Link } from "react-router-dom";


function Header() {

  const [menu, setMenu] = useState(false)
  const { theme} = React.useContext(ThemeContext);

  return (
    <>

      <div className='sm:hidden header flex justify-between items-center'>
        <h1 className='py-2' style={{ fontFamily: 'Josefin Sans' }}>A<sub>M</sub></h1>
        <p onClick={() => setMenu(true)} className=' text-white'><ImMenu fontSize='1.25rem' color={theme === 'dark' ? 'white' : 'black'} />  </p>
      </div>
      {menu ?
        <div className='menu '>

          <p onClick={() => setMenu(false)} className='float-right m-4'><AiOutlineClose fontSize='1.25rem' /></p>
          <ul className='flex justify-between items-center flex-col pr-10 mr-[20px] w-[100%] relative' style={{ fontFamily: 'Belleza' }} >
         <Link className='header-link' to='/'> <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold  text-gray-900 py-2 px-4 rounded-full hover:bg-pink-100 hover:text-black transition-all'><p className=' border-pink-100 '>Home</p></li></Link>  
          <Link className='header-link'  to='/#projects'> <li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Projects</li></Link> 
          <Link className='header-link'  to='/contact'><li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Contact</li></Link>  
          <Link className='header-link'  to='/'><li onClick={() => setMenu(false)} className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Resume</li></Link>  
            <li className='header-link' >          <Toggle /> 
            </li>
          </ul>

        </div>
        : null
      } 
      <div className='hidden sm:block header fixed top-0 left-0 z-10 dark:bg-[#03060b] w-[100%]  sm:flex justify-center align-center '>
      <div id='header' className=' w-[100%] md:w-[60%]  sm:flex justify-center align-center pt-4  md:text-[1rem] mb-5  lg:text-[1.25rem]'>
        <h1 className='py-2 w-[20%]' style={{ fontFamily: 'Josefin Sans' }}>A<sub>M</sub></h1>
        <ul className='flex justify-between items-center pr-10 ml-[20px] mr-[20px] w-[90%] relative' style={{ fontFamily: 'Belleza' }} >
     <Link to='/'>   <li className='ml-[4%]  font-semibold  text-gray-900 py-2 px-6 rounded-full hover:bg-pink-100 hover:text-black transition-all'><p className=' border-pink-100 border-b-2'>Home</p></li></Link>  
        <Link to='/#projects'> <li className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Projects</li></Link> 
<Link  to='/contact'> <li className='ml-[4%]  font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Contact</li></Link>
<Link   to='/'>     <li className='ml-[4%] mr-[100px] font-semibold text-gray-900 rounded-full py-2 px-4 hover:bg-pink-100 hover:text-black transition-all'>Resume</li></Link>
          <li className='ml-[4%]'>          <Toggle />
          </li></ul>
      </div>
      </div>
    </>
  )
}

export default Header