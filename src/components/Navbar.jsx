import React from 'react'
import { Link } from 'react-scroll'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);

const Navbar = () => {

    useGSAP(() => {
        const tl = gsap.timeline();
      
        tl.from(".Logo", {
          opacity: 0,
          y: -50,
          duration: 0.6,
        })
        .from(".navItems", {
          opacity: 0,
          y: -50,
          stagger: 0.2,
          duration: 0.6,
        }, "-=0.2");
      });
      

  return (
    <div className='Navbar text-white z-50 fixed flex items-center justify-between w-full px-[8vw] py-3 font-projectsHeading'>
        <div className='Logo'>
            <h1 className='sm:text-5xl text-3xl navItems'>Gamee.</h1>
        </div>
        <div className='navItems'>
            <ul className='flex sm:gap-15 gap-10 sm:text-[18px] text-[15px]'>
                <li className="relative group">
                    <Link 
                        to="section1" 
                        smooth={true} 
                        duration={500}
                        className="inline-block py-1 transition-colors duration-500 cursor-pointer navItems"
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li className="relative group">
                    <Link 
                        to="section2" 
                        smooth={true} 
                        duration={500}
                        className="inline-block py-1 transition-colors duration-500 cursor-pointer navItems"
                    >
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
        </div>  
    </div>
  )
}

export default Navbar