import React from 'react'


 function Seekers() {
  return (
    <>
    <div className='flex flex-wrap'>
        <div className='h-[90vh] lg:w-[50%] w-[100%]  '>
            <img src="/images/img.png" className='lg:h-[70vh] h-[60vh] w-[78%] mt-[155px] ml-[13%]'/>
            </div>
            <div className='h-[90vh] lg:w-[50%] w-[100%] flex '>
                <div className='w-[100%]  mb-[-100px] h-[auto] flex'style={{overflow:"hidden",position:"relative"}} >
                    <div className='lg:ml-[32%] md:ml-[32%]  mt-[30%] '>
                        <h1 className='text-5xl font-bold  '>Job Seeker</h1>
                        <hr className="h-[5px] bg-gray-400 w-[6%] mt-[70px] "/>
                        <p className='font-semibold'>Apply for a job with one click<br/> after completing your profile</p>
                        <hr className="h-[5px] bg-gray-400 w-[6%] mt-[40px] "/>
                        <p  className='font-semibold'>Free CV templates- Many to<br/> choose from</p>
                        <hr className="h-[5px] bg-gray-400 w-[6%] mt-[40px] "/>
                        <p className='font-semibold'>Free exports to pdf</p>
                        <hr className="h-[5px] bg-gray-400 w-[6%] mt-[40px] "/>
                        <p className='font-semibold'>Free profile and access to jobs</p>
                        </div>
                        <div className=' w-[85vh] mt-[25%]  ml-[60%]  'style={{position :'absolute' ,overflow:'hidden'}}  >
                            <div className='h-[77vh] w-[90%] border rounded   rounded-full  overflow-hidden ' style={{overflow:"hidden"}}>
                                <div className='h-[81%] w-[91%] border rounded rounded-full ml-[10%] mt-[8%] overflow-hidden'>
                                    <div className='h-[76%] w-[96%] border rounded rounded-full ml-[12%] mt-[9%] overflow-hidden'>
                                        <div className='h-[72%] w-[90%] border rounded rounded-full ml-[13%] mt-[12%] overflow-hidden'>
                                 </div>
                             </div>
                         </div>
                         </div>
                        </div>
                    </div>
                </div>
       </div>

    </>
  )
}
export default Seekers