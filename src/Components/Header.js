import React from 'react'
import logo from '../assets/logo1.jpeg'
import sir from '../assets/raju sir.jpeg'
const Header = () => {
  return (
  <div className='mx-auto flex justify-between    text-white bg-black     p-2 md:p-5'>
    <div>
      <img src={logo} alt='image1' className='rounded-full  shrink-0 md:h-24   md:w-24 h-10 w-10     '/>
    </div>
    <div className='text-center'> 
      <p className='text-xs  md:text-3xl mx-auto font-bold'  >S.R.K.R. ENGINEERING COLLEGE</p>
      <p className='text-xs  md:text-2xl mx-auto font-semibold'>Bhimavaram - 534204, W.G. Dt., A.P.</p>
      <p className='text-xs md:text-xl font-semibold '>Department of Civil Engineering</p>
    </div>
    <div>
      <img src={sir} alt='image2' className='border-2 shrink-0  md:h-24  md:w-24 h-10 w-10  '/>

    </div>
    
    </div>)
}
export default Header;