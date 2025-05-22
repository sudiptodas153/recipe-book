import React, { use } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
// import icon from '../../assets/ChatGPT Image May 20, 2025, 11_13_44 PM.png'

const Footer = () => {

const {themes} = use(AuthContext)

  return (
    <div className='mt-10'>

      <footer className={`footer ${themes && 'text-black'} sm:footer-horizontal md:flex justify-center md:gap-28 bg-yellow-200 text-base-content p-10`}>
        <aside>

          <h2 className='text-4xl font-bold'>Yummiary</h2>
          <p className='border-b pb-4 border-gray-400'>Copyright © {new Date().getFullYear()} - All right reserved by Yummiary.</p>

          <div className='flex items-center  gap-3 mt-2'>
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
            <FaGithub size={30} />
            <FaTwitter size={30} />
          </div>
        </aside>
        <nav>

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