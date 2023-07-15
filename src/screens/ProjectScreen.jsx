import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import PRG1 from "../static/img/projects/test1.jpg"
import PRG2 from "../static/img/projects/test2.jpg"
import PRG3 from "../static/img/projects/test3.jpg"
import PRG4 from "../static/img/projects/test4.jpg"
import PRG5 from "../static/img/projects/test5.jpg"




const ProjectItem = ({ item, setHoveredItem }) => {
    const [myContext, setMyContext] = useContext(Context);
    const handleMouseEnter = () => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className='flex flex-row h-24 justify-between pr-8 border-b py-2 hover:pl-10 project-item content-start'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className='text-4xl flex left h-12 '>
                <div className='w-10 overflow-hidden flex items-center' ><BiChevronRight className='ic' /></div>
                <div>{item.title}</div>
            </div>
            <div className='text-2xl right h-8 justify-self-end'>{item.dev}</div>
        </div>
    )
}

function ProjectScreen() {
    const [myContext, setMyContext] = useContext(Context);
    const [hoveredItem, setHoveredItem] = useState(null);
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
                <div className=' flex-auto p-4 noscroll-bar overflow-auto '>
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "CASINO ONLINE", dev: "Django / React" }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "REFRAME", dev: "Unity / VR" }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "TETRIS", dev: "p5js" }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "2048", dev: "Javascript" }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "GOOD BLOCKS", dev: "React" }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "TODO", dev: "Firebase / React" }}
                    />
                </div>

                <div className={`max-sm:hidden aspect-[5/3] h-full overflow-hidden relative rounded-tl-lg `}>
                    <img className={`absolute duration-700 object-cover h-full  opacity-0 ${(hoveredItem && hoveredItem.title === "TETRIS") ? 'opacity-100 scale-105' : ''}`} src={PRG1} alt="" />
                    <img className={`absolute duration-700 object-cover h-full  opacity-0 ${(hoveredItem && hoveredItem.title === "TODO") ? 'opacity-100 scale-105' : ''}`} src={PRG2} alt="" />
                    <img className={`absolute duration-700 object-cover h-full  opacity-0 ${(hoveredItem && hoveredItem.title === "REFRAME") ? 'opacity-100 scale-105' : ''}`} src={PRG3} alt="" />
                    <img className={`absolute duration-700 object-cover h-full  opacity-0 ${(hoveredItem && hoveredItem.title === "GOOD BLOCKS") ? 'opacity-100 scale-105' : ''}`} src={PRG4} alt="" />
                    <img className={`absolute duration-700 object-cover h-full  opacity-0 ${(hoveredItem && hoveredItem.title === "2048") ? 'opacity-100 scale-105' : ''}`} src={PRG5} alt="" />
                    <img className={`absolute duration-700 object-cover h-full  opacity-0 ${(hoveredItem && hoveredItem.title === "CASINO ONLINE") ? 'opacity-100 scale-105' : ''}`} src={PRG2} alt="" />
                </div>
            </div>

        </div>
    )
}

export default ProjectScreen