import React from 'react';
import loginImg from '../../src/imgs/walk_bank_facility.webp';
import logoImg from '../../src/imgs/AU-Bank-logo.png';

function Login() {
  return (
    <div className='flex flex-col md:flex-row h-[100vh]'>
      <div className='bgImg w-full md:w-1/2 bg-[#6d3078] hidden md:flex'>
        <img className='self-center justify-self-center m-auto' src={loginImg}></img>
      </div>
      <div className='login-form w-full md:w-1/2 p-4'>
        <div className='form-wrapp mx-auto md:mx-10 sm:w-full sm:max-w-sm'>
          <div className='logo-wrap'><img src={logoImg} className='w-[120px] mx-auto md:mx-0' /></div>
          <form className='space-y-3'>
            <div className='feild'>
              <label className='block text-sm/6 text-gray-700'>Register Mobile Number</label>
              <input className='rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6' autoFocus
                placeholder='Enter Your Number' />
              <small className='text-xs w-full block text-red-500 mt-1'>Invalid Number</small>
            </div>
            <div className='feild'>
              <label className='block text-sm/6 text-gray-700 flex flex-auto justify-between'>Enter OTP <small className='text-xs'>02 : 00</small></label>
              <input type='password' className='rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6'
              />
              <div className='flex flex-auto gap-5'>
              <small className='text-xs w-full block text-red-500 mt-1'>Invalid OTP <span className='text-xs text-[#6d3078] underline text-center float-right'>Resend OTP</span></small>
              </div>

            </div>

            <div className='feild'>
              <input type='submit' className='bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md my-5' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
