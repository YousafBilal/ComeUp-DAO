import React from 'react'
import Img from '../images/img1.png'

 function Employer() {
  return (
    <div className='flex flex-wrap'>
      <div className='h-[90vh] lg:w-[50%] w-[100%] flex '>

      <div className='w-[100%] mb-[-200px] h-[auto] flex overflow-hidden relative'>
   <div className='lg:ml-[35%] md:ml-[32%] ml-[17%] mt-[30%] '>
   <h1 className='text-5xl font-bold  '>Employer</h1>

<hr className="h-[5px] bg-gray-400 w-[6%] mt-[70px] "/>     
<p className='font-semibold'>Apply for a job with one click<br/> after completing your profile</p>
<hr className="h-[5px] bg-gray-400 w-[6%] mt-[40px] "/>       
<p  className='font-semibold'>Free CV templates- Many to<br/> choose from</p>
<hr className="h-[5px] bg-gray-400 w-[6%] mt-[40px] "/>
<p className='font-semibold'>Free exports to pdf</p>
<hr className="h-[5px] bg-gray-400 w-[6%] mt-[40px] "/>
<p className='font-semibold'>Free profile and access to jobs</p>
   </div>
<div className=' w-[85vh] mt-[25%]  lg:ml-[-31%] ml-[-100%] overflow-hidden absolute ' >
<div className='h-[79vh] w-[87%] border rounded   rounded-full  overflow-hidden ' >
        <div className='h-[81%] w-[91%]  ml-[-2%] mt-[10%] border  rounded-full  overflow-hidden'>
        <div className='h-[76%] w-[96%]  ml-[-7%] mt-[11%] border  rounded-full  overflow-hidden'>
        <div className='h-[72%] w-[90%]  ml-[-2%] mt-[9%]  border  rounded-full overflow-hidden'>
        </div>
            
        </div>
        </div>
        </div>
</div>
</div>
        </div>
      <div className='h-[90vh] lg:w-[50%] w-[100%] mt-[10%] '>
        <img src={Img} className='ml-[15%]'/>
      </div>

      
    </div>
  )
}
export default Employer