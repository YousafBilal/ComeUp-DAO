import React from "react";
import Img3 from '../images/image.png'
import Img22 from '../images/Avatar.png'


function Navbar1() {
    return (
        <>
        <div className=" text-gray-600 mt-6 ">
            <div className=" container flex flex-wrap mx-auto  p-5 item-center flex-col  md:flex-row ">
                <a className=" text-gray-900 font-medium title-font  mb-4 md:mb-0  flex">
                    <span className="text-xl ml-3">
                        <img src={Img3} className="h-[7vh] lg:w-[7vw] md:w-[4vw] sm:w-[2vw] "/>
                    </span>
                </a>
                <nav className="items-center text-base flex flex-wrap justify-center  mr-3 md:ml-auto ">
                <img src={Img22} className="h-[56px] lg:w-[30%] md:w-[40%] sm:w-[20%]  "/>
                    
                    <a className="op1 mr-5 pl-2 ">Wade Warren</a>
                </nav>
               
            </div>
        </div>
        </>
    )
}

export default Navbar1