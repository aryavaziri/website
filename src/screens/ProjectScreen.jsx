import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

function ProjectScreen() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Projects" })
    }, [])
    return (
        <div
            className={`${(myContext.theme) ? "border-slate-500" : "border-c1"} relative h-screen w-screen font-custom2 px-4 sm:px-16 md:px-40 duration-500 overflow-hidden ${(myContext.menu || myContext.title !== 'Projects') ? "mt--2 opacity-0" : " delay-300"}`} >
            <h1 className={`fixed px-4 pt-10 text-4xl sm:text-6xl font-bold border-inherit text-shadow `}>
                Projects
            </h1>
            <div className={`absolute flex bottom-0 left-0 pl-4 sm:pl-10 md:pl-40 h-full max-sm:pt-20 sm:max-h-75vh md:max-h-[65vh] w-full`}>
                <div className=' flex-auto p-4 '>
                    <div className='flex items-center justify-between px-4 border-b py-2 hover:pl-10'>
                        <div className='text-4xl flex'>
                            <BiChevronRight />
                            <div>REFRAME</div>
                        </div>
                        <div className='text-2xl'>VR</div>
                    </div>
                    <div className='flex items-center justify-between px-4 border-b py-2 hover:pl-10'>
                        <div className='text-4xl'>REFRAME</div>
                        <div className='text-2xl'>VR</div>
                    </div>
                </div>
                <div className={`max-sm:hidden aspect-square h-full max-w-75vh border`}>
                </div>
            </div>

        </div>
    )
}

export default ProjectScreen