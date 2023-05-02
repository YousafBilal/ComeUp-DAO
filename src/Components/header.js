import React from "react";
import SignUp from "./signup";
import Img1 from '../image/Ellipse 6 (Stroke).png'

function Header() {
    return(
        <>
        <div className="flex justify-around flex-wrap">
            <div className="lg:w-[55%] md:w-[50%] sm:w-[100%] ">
                <div className="bg flex lg:h-[320px] lg:w-[270px] md:w-[200px] md:h-[300px] sm:w-[110px]">
                <img className=' h-[15vh] w-[10vw] mb-12' src={Img1}/>
                <div className="lg:ml-[6vw]">
                <h1 className='lg:w-[500px] sm:w-[400px]  lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mt-[60px]'>Find Your <span className='text-indigo-800'>Blockchain <br/> Dev</span> Job Today</h1>
                            <p className='lg:text-xl md:text-xl sm:text-md text-md mt-4'>Discover the leading companies in the blockchain industry and find job opportunities.</p>
                            <button class="btn1 py-3  lg:w-[300px] md:w-[220px] sm:w-[220px] w-[200px] focus:outline-none hover:bg-gray-200 rounded  mt-5 text-white">Login Now
    </button>

                </div>


                </div>

            </div>
            <div className="lg:w-[45%] md:w-[50%] sm:w-[100%]">
                <SignUp/>

            </div>


        </div>
        </>
    )
    
}

export default Header