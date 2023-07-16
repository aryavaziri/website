import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import IMG1 from "../static/img/projects/Casinoa.jpg";
import IMG2 from "../static/img/projects/ReframePost.png";

import PRG1 from "../static/img/projects/test1.jpg"
import PRG2 from "../static/img/projects/test2.jpg"
import PRG3 from "../static/img/projects/test3.jpg"
import PRG4 from "../static/img/projects/test4.jpg"
import PRG5 from "../static/img/projects/test5.jpg"
import { render } from '@testing-library/react';




const ProjectItem = ({ item, setHoveredItem }) => {
    const [myContext, setMyContext] = useContext(Context);
    const handleMouseEnter = () => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <Link to={item.link} className='flex flex-row h-20 relative  justify-between pr-8 border-b py-2 hover:pl-10 project-item content-start'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className='text-4xl flex left h-12 '>
                <div className='w-10 overflow-hidden flex items-center max-sm:hidden' ><BiChevronRight className='ic' /></div>
                <div>{item.title}</div>
            </div>
            <div className='text-2xl right h-8 bottom-4 right-0 absolute'>{item.dev}</div>
        </Link>
    )
}

const ProjectIMG = ({item, src, hoveredItem}) => {
    return (
        <img className={`absolute duration-700 object-cover w-full h-full  opacity-0 ${(hoveredItem && hoveredItem.title === item.title) ? 'opacity-100 scale-105' : ''}`} src={src} alt="" />
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
            className={`${(myContext.theme) ? "border-slate-500" : "border-c1"} relative h-screen w-screen font-custom2 px-4 sm:px-16 md:px-24 duration-500 overflow-hidden ${(myContext.menu || myContext.title !== 'Projects') ? "mt--2 opacity-0" : " delay-300"}`} >
            <h1 className={`fixed px-4 pt-10 text-4xl sm:text-6xl font-bold border-inherit text-shadow `}>
                Projects
            </h1>
            <div className={`absolute bottom-0 left-0 sm:grid grid-cols-2 gap-4 pl-4 sm:pl-10 md:pl-20 h-full max-h-[85vh] md:max-h-[70vh] w-full`}>
                <div className=' flex-auto p-4 noscroll-bar overflow-auto h-full'>
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "CASINO ONLINE", dev: "Django / React", link: '/projects/poker' }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "REFRAME", dev: "Unity / VR", link: '/projects/reframe' }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "TETRIS", dev: "p5js", link: '/projects/poker' }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "2048", dev: "Javascript", link: '/projects/poker' }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "GOOD BLOCKS", dev: "React", link: '/projects/poker' }}
                    />
                    <ProjectItem
                        setHoveredItem={setHoveredItem}
                        item={{ title: "TODO", dev: "Firebase / React", link: '/projects/poker' }}
                    />
                </div>


                <div className={`max-sm:hidden h-full overflow-hidden relative rounded-tl-[100px] `}>
                    <ProjectIMG hoveredItem={hoveredItem} src={IMG1} item={{ title: "CASINO ONLINE"}} />
                    <ProjectIMG hoveredItem={hoveredItem} src={IMG2} item={{ title: "REFRAME"}} />
                    <ProjectIMG hoveredItem={hoveredItem} src={PRG1} item={{ title: "TODO"}} />
                    <ProjectIMG hoveredItem={hoveredItem} src={PRG3} item={{ title: "2048"}} />
                    <ProjectIMG hoveredItem={hoveredItem} src={PRG5} item={{ title: "GOOD BLOCKS"}} />
                    <ProjectIMG hoveredItem={hoveredItem} src={PRG4} item={{ title: "TETRIS"}} />
                </div>
            </div>

        </div>
    )
}

export default ProjectScreen