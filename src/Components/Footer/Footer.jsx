import React, { use } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import icon from '../../assets/icon.png'
import { Link } from 'react-router';

const Footer = () => {

const {themes, user} = use(AuthContext)

  return (
    <div className='mt-10'>

      <footer className={`footer ${!themes && 'text-black bg-yellow-200'} sm:footer-horizontal md:flex justify-between ${themes && 'bg-gray-800'} text-base-content p-10`}>
        <div className='md:flex-1'>

          <div className='flex relative text-4xl font-bold'><img className='absolute -top-5 right-32 w-26' src={icon} alt="" /> <span className='ml-12'>Yummiary</span></div>
          <p className='border-b pb-4 border-gray-400'>Copyright © {new Date().getFullYear()} - All right reserved by Yummiary.</p>

          <div className='flex items-center  gap-3 mt-2'>
            <a href="https://www.facebook.com/sudipto.das.601834" target='blank'><FaFacebook size={30} /></a>
            <a href="https://www.linkedin.com/in/as-sudipto-a54228301/" target='blank'><FaLinkedin size={30} /></a>
            <a href="https://github.com/sudiptodas153" target='blank'><FaGithub size={30} /></a>
            <a href="https://x.com/sudipto863" target='blank'><FaTwitter size={30} /></a>
            
          </div>
        </div >
        <nav>
          <h2 className='footer-title'>Service</h2>
          <p className='text-sm font-bold'><Link to={'/all-recipe'}>All Recipe</Link></p>
          <p className='text-sm font-bold'><Link to={'/my-recipes'}>My Recipe</Link></p>
          <p className='text-sm font-bold'><Link to={ user || '/login'}>Login</Link></p>
         

        </nav>

        <nav className='md:ml-16'>
<h2 className='footer-title'>Contact</h2>
          <p className='text-sm font-bold'>Name: <span className=' font-semibold'>Yummiary Team</span></p>
          <p className='text-sm font-bold'>Phone: <span className=' font-semibold'>+8801312590698</span></p>
          <p className='text-sm font-bold'>Email: <span className=' font-semibold'>yummiary698@gmail.com</span></p>
          <p className='text-sm font-bold'>Address: <span className=' font-semibold'>House #123, Food Street, Dhaka, Bangladesh</span></p>

        </nav>
      </footer>

    </div>
  );
};

export default Footer;