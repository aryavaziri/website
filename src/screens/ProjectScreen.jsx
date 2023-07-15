import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";




const ProjectItem = ({item}) => {
    const [myContext, setMyContext] = useContext(Context);

    return (
        <div className='flex items-center justify-between pr-8 border-b py-2 hover:pl-10 project-item'>
        <div className='text-4xl flex left'>
            <div className='w-10 overflow-hidden flex items-center' ><BiChevronRight className='ic' /></div>
            <div>{item.title}</div>
        </div>
        <div className='text-2xl right'>{item.dev}</div>
    </div>
    )
}

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
                <div className=' flex-auto p-4 overflow-auto '>
                    <ProjectItem item={{title: "CASINO ONLINE", dev: "Django / React"}} />
                    <ProjectItem item={{title: "REFRAME", dev: "Unity / VR"}} />
                    <ProjectItem item={{title: "TETRIS", dev: "p5js"}} />
                    <ProjectItem item={{title: "2048", dev: "Javascript"}} />
                    <ProjectItem item={{title: "GOOD BLOCKS", dev: "React"}} />
                    <ProjectItem item={{title: "TODO", dev: "Firebase / React"}} />
                </div>

                <div className={`max-sm:hidden aspect-square h-full max-w-75vh border`}>
                    <img src="" alt="" />
                </div>
            </div>

        </div>
    )
}

export default ProjectScreen