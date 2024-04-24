import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { registerService } from '@/service/auth.service'

const register = () => {

    async function handleRegister(user){
        'use server'
        const newUser ={ 
            firstname: user.get('firstname'),
            lastname: user.get('lastname'),
            gender: user.get('gender'),
            email: user.get('email'),
            password: user.get('password'),
        }
        await registerService(newUser)

    }

    return (
        <div className='h-screen w-screen flex items-center'>
            <div className='w-full'>
                <div className='pl-40'>
                    <Image src={"/assets/icons/logo.svg"}  width={150} height={100} ></Image>
                </div>
                <div className='pl-40 w-full flex '>
                    <div className='w-1/2  flex justify-center items-center'>
                        <div className=' w-full mt-6'>
                            <form className="w-full mx-auto grid grid-cols-2 gap-6" action={handleRegister}>
                                <div className='w-full'>
                                    <div className="mb-5">
                                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name :</label>
                                      <input type="text" id="text" name='firstname' className=" outline-blue-500 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your name" required />
                                    </div>
                                    <div className="mb-5">
                                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                                      <input type="email" name='email' id="email" className=" outline-blue-500 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='info@xyz.com' required />
                                    </div>
                                    <div className="mb-5">
                                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password : </label>
                                      <input type="password" name='password' id="password" className=" outline-blue-500 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='***********' required />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className="mb-5">
                                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name :</label>
                                      <input type="text" id="lastName" name='lastname' className=" outline-blue-500 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your name" required />
                                    </div>
                                    <div className="mb-5">
                                      <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender:</label>
                                      <select name='gender' className='outline-blue-500 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'>
                                        <option value="male"  >Male</option>
                                        <option value="female"  >Female</option>
                                      </select>
                                    </div>
                                    <div className="mb-5">
                                      <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password :</label>
                                      <input name='password' type="password" id="repeat-password" className=" outline-blue-500 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='***********' required />
                                    </div>
                                </div>
                                <div>
                                    <Link href={"/login"}> 
                                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-fit">Sign Up</button> <br /><br />
                                    </Link>
                                    <label htmlFor="remember" className="ms-2 text-sm font-normal text-slate-600 ">Already have an account?  </label>
                                    <Link href={'/login'} className='text-blue-600 text-sm'> Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-1/2 pl-16'>
                        <Image src={"/assets/icons/sign-up.svg"} width={350} height={200}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register