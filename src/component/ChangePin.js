import React from "react";

function ChangePin() {
    return (<>
        <div className="form-wrap">
            <div className='login-form w-full p-4'>
                <div className='form-wrapp mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-3'>
                        <h1 className="text-center text-[24px] my-5 font-bold">Change Your Card Pin</h1>
                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Card Number</label>
                            <input className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' 
                            placeholder="Enter Your Card Number"/>
                            <small className='text-xs w-full block text-red-500 mt-1'>Please check card number</small>
                        </div>
                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Card Expiry & CVV</label>
                            <div className="flex gap-3">
                            <input className='w-1/2 rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none'
                            placeholder="MM/YY"/>
                            <input type="password" className='w-1/2 rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none'
                            placeholder="CVV"/>
                            </div>
                            
                            <small className='text-xs w-full block text-red-500 mt-1'>Please check </small>
                        </div>
                        <div className='feild w-full mx-auto'>
                            <button type='submit' className='w-full bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md mt-2 mb-8'>Generate OTP</button>
                        </div>
                        </form>

                        <form className='space-y-3'>
                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 flex flex-auto justify-between font-bold'>Enter OTP <small className='text-xs'>02 : 00</small></label>
                            <input className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' placeholder='Enter OTP'
                            />
                            <div className='flex flex-auto gap-5'>
                                <small className='text-xs w-full block text-red-500 mt-1'>Invalid OTP <span className='text-xs text-[#6d3078] underline text-center float-right'>Resend OTP</span></small>
                            </div>

                        </div>
                        <div className='feild w-full mx-auto'>
                            <button type='submit' className='w-full bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md my-5'>Verify</button>
                        </div>
                    </form>
                </div>
                <hr className="color-gray-300 my-5 w-3/6 mx-auto" />
                <div className='form-wrapp mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-3'>
                        {/* <h1 className="text-center text-[22px] my-5">Set New Pin</h1> */}
                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Enter Current Pin</label>
                            <input type="password" className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' 
                            />
                            <small className='text-xs w-full block text-red-500 mt-1'>Wrong pin</small>
                        </div>
                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Enter New Pin</label>
                            <input type="password" className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' 
                            />
                            <small className='text-xs w-full block text-red-500 mt-1'>Contain atleast 8 characters<br />
                                Contain both lowercase and uppercase letters<br />
                                Contain a number<br />
                                Contain a special character, e.g.: -!@#$%^&*+</small>
                        </div>
                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Confirm Pin</label>
                            <input type="password" className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' 
                            />
                            <small className='text-xs w-full block text-red-500 mt-1'>Pin not matched</small>
                        </div>
                        <div className='feild w-full mx-auto'>
                            <button type='submit' className='w-full bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md mt-2 mb-5'>Update Pin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default ChangePin;