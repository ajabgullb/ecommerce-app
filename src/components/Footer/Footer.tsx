import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
      <footer className='w-full'>
        <div className='w-[99%] h-[0.5px] bg-black mx-2'></div>
        <div className='w-full h-80 flex flex-row justify-between '>
          <div className='w-96 h-40 my-7 mx-20'>
            <div
            className='bg-white w-40 h-14 text-lg font-sans font-semibold'
            >Ajab Gull Bhatti</div>
            <div className='py-20 font-sans text-[#484a4d]'>
              <span className='flex gap-[4px]'>
                © 2023
                <a target="_blank" className='underline hover:text-gray-800 mx-1' href="https://www.linkedin.com/in/ajabgullbhatti/">Ajab Gull Bhatti</a>
                All rights reserved.
              </span>
            </div>
          </div>
          <div className=''>
            <div className='flex gap-10'>
              <div className='bg-black w-[1px] h-36 mt-7'></div>

              <div className='flex flex-col mt-10 font-sans'>
                <span className='text-gray-800'>Resources</span>
                <div className='flex flex-col mt-5 gap-3'>
                  <Link to="/about" className="hover:text-[#484a4d] hover:underline">About Us</Link>
                  <Link to="/contact" className="hover:text-[#484a4d] hover:underline">Contact Us</Link>
                </div>
              </div>

              <div className='bg-black w-[1px] h-36 mt-7'></div>

              <div className='flex flex-col mt-10 right-px mr-20 font-sans'>
                <span className='text-gray-800'>Resources</span>
                <div className='flex flex-col mt-5 gap-3'>
                  <Link to="/" className="hover:text-[#484a4d] hover:underline">Privacy Policy</Link>
                  <Link to="/" className="hover:text-[#484a4d] hover:underline">Terms of Use</Link>
                </div>
              </div>
            </div>
            <div className='flex gap-3 mt-5'>
              <a className='hover:text-[#484a4d] hover:underline' target="_blank" href="https://www.linkedin.com/in/ajabgullbhatti/">LinkedIn</a>
              <a className='hover:text-[#484a4d] hover:underline' target="_blank" href="https://x.com/ajabgullbhatti">X</a>
              <a className='hover:text-[#484a4d] hover:underline' target="_blank" href="https://www.facebook.com/profile.php?id=61559685493333">Facebook</a>
              <a className='hover:text-[#484a4d] hover:underline' target="_blank" href="https://github.com/ajabgullb">GitHub</a>
            </div>
          </div>
        </div>
        <div className='w-full h-[0.5px] bg-black'></div>
      </footer>  
    </>
  )
}

