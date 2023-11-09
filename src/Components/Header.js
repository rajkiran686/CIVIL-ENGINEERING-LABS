
import React from 'react'
import logo from '../assets/logo1.jpeg'
import sir from '../assets/raju sir.jpeg'
const Header = () => {
  return (
  <div className='mx-auto flex justify-between    text-white bg-black     p-5 md:p-5'>
    <div>
      <img src={logo} alt='image' className='rounded-full  shrink-0 h-20  w-20   md:w-full md:h-full '/>
    </div>
    <div className='text-center md:space-y-5  md:p-5   '> 
      <p className='text-sm md:text-6xl mx-auto font-bold'  >S.R.K.R. ENGINEERING COLLEGE</p>
      <p className='text-xs md:text-5xl mx-auto font-semibold'>Bhimavaram - 534204, W.G. Dt., A.P.</p>
      <p className='text-xs md:text-4xl font-semibold '>Department of Civil Engineering</p>
    </div>
    <div>
      <img src={sir} alt='image' className='border-2 shrink-0  h-20 w-20    md:w-full md:h-full '/>

    </div>
    
    </div>)
}
export default Header;