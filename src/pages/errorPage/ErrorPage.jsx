import {Link} from "react-router-dom";

export function ErrorPage() {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className=' flex justify-center  px-20 items-center backdrop-blur w-0.8 py-4'>
                    <h1 className=' font-extrabold fill-amber-800 text-red-600 text-[60px] sm:text[100px] md:text-[250px] lg:text-[250px] border-gray-200 dark:border-amber-100 border-solid border-r-4 pr-4 dark:text-amber-100 dark:border-b-blue-400'>404</h1>
                    <div className='flex flex-col px-1 mx-5 divide-black '>
                        <h5 className='font-extralight text-4xl  sm:text-[40px] md:text-[90px] md:leading-[79px] lg:text-[110px] lg:leading-[100px] py-2 dark:text-amber-100'>Page Not Found</h5>
                        <h6 className='hidden sm:flex md:flex font-light text-s dark:text-amber-100 sm:text-2xs'>You might've taken a wrong step or I forgot to push a commit.🌝🌝</h6>
                </div>
                </div>
                <h6 className='flex sm:hidden md:hidden px-20 items-center w-0.8 py-4 font-light text-s dark:text-amber-100 sm:text-2xs'>You might've taken a wrong step or I forgot to push a commit.🌝🌝</h6>
                <div>
                    <button className='hover:bg-white hover:text-black hover:font-thin hover:text-xl text-lg font-thin p-2 rounded-lg dark:text-amber-100 dark:hover:bg-cyan-700 dark:hover:text-amber-50'><Link to={'/'}> GO HOME</Link></button>
                </div>
            </div>

        </>
    )
}