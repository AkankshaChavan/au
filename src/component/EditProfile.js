import React, {useState} from "react";

function EditProfile() {
    const [email, setEmail] = useState('john.doe@example.com');
    const handleEmailChange = (e) => setEmail(e.target.value);

    const [birthDate, setbirthDate] = useState('2000-05-05');
    const handleBirthDateChange = (e) => setbirthDate(e.target.value);

    const [gender, setGender] = useState('Male');
    const handleGender = (e) => setGender(e.target.value);

    return (<>
        <div className="form-wrap">
            <div className='login-form w-full p-4'>
                <div className='form-wrapp mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-3'>
                        <h1 className="text-center text-[24px] my-5 font-bold">Edit Profile</h1>
                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Card Number</label>
                            <input className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' autoFocus
                                placeholder='Enter Card Number' value="1234-5678-9876-5432" disabled />
                        </div>
                        <div className="md:flex gap-2">
                            <div className='feild w-full'>
                                <label className='block text-sm/6 text-gray-700 font-bold'>First Name</label>
                                <input className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none'
                                    placeholder="Enter Your Card Number" value="Joe" disabled />
                            </div>
                            <div className='feild w-full'>
                                <label className='block text-sm/6 text-gray-700 font-bold'>Last Name</label>
                                <input className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none'
                                    placeholder="Enter Your Card Number" value="Doe" disabled />
                            </div>
                        </div>

                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Mobile Number</label>
                            <input className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' autoFocus
                                placeholder='Enter Your Number' value="918-454-4999" disabled />
                        </div>

                        <div className='feild w-full'>
                            <label className='block text-sm/6 text-gray-700 font-bold'>Email</label>
                            <input type="email" className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none' autoFocus
                                value={email}
                                onChange={handleEmailChange} />
                            <small className='text-xs w-full block text-red-500 mt-1'>Invalid email</small>
                        </div>

                        <div className="md:flex gap-2">
                            <div className='feild w-full'>
                                <label className='block text-sm/6 text-gray-700 font-bold'>Birth Date</label>
                                <input type="date" className='w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none'
                                    placeholder="2000-05-05"
                                    value={birthDate}
                                    onChange={handleBirthDateChange} />
                            </div>
                            <div className='feild w-full'>
                                <label className='block text-sm/6 text-gray-700 font-bold'>Gender</label>
                                <select name="Gender" 
                                value={gender}
                                onChange={handleGender}
                                className="w-full rounded-md bg-white px-3 py-1.5 text-base sm:text-sm/6 border-[1px] border-[#a3a5aa] focus:border-[#6d3078] focus:ring-1 focus:ring-[#6d3078] focus:outline-none">
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </select>
                            </div>
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
                            <button type='submit' className='w-full bg-[#9a48a9] hover:bg-[#6d3078] text-white p-2 m-auto border-none rounded-md my-5'>Verify & Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default EditProfile;