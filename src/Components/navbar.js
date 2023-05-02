import React from "react";
import Img2 from  '../images/image.png'


function Navbar() {
    return (
        <>
        <div className="text-gray-600">
            <div className=" container flex flex-wrap mx-auto  p-5 item-center flex-col  md:flex-row ">
                <a className=" text-gray-900 font-medium title-font  mb-4 md:mb-0  flex">
                    <span className="text-xl ml-3">
                        <img src={Img2} className="h-[7vh] lg:w-[7vw] md:w-[4vw] sm:w-[2vw] "/>
                    </span>
                </a>
                <nav className="items-center text-base flex flex-wrap justify-center  mr-3 md:ml-auto ">
                    <a className="op mr-5 ml-4 ">Option 1</a>
                    <a className="op1 mr-5 ">Option 2</a>
                </nav>
                <button className="btn p-[4vh] rounded-lg text-base mr-3 ml-5 py-1 px-3 mt-4 md:mt-0 text-indigo-800 focus:outline-none">Create Profile</button>
                <button className="btn2 p-[4vh] rounded-lg text-base  ml-5 py-1 px-3  mt-4 md:mt-0 text-white focus:outline-non">Employer</button>
            </div>
        </div>
        </>
    )
}

export default Navbar 