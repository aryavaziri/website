import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import personalPhoto from '../static/img/about.jpg'
import { BiArrowToBottom } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import CV from "../static/cv.pdf";

function AboutScreen() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "About" })
    }, [])
    return (
        <>
            <div className={`w-full sm:max-md:w-1/2 md:w-37vh h-screen md:h-75vh sm:max-md:rounded-tl-3xl sm:rounded-bl-3xl fixed z-10 max-sm:z-9905 overflow-hidden right-0 top-0 duration-500 ${(myContext.menu || myContext.title !== 'About') ? "mr--1 opacity-0" : ""} ${(myContext.theme) ? "drop-shadow-lg" : ""}`}>
                <img
                    src={personalPhoto}
                    alt="PersonalPhoto"
                    className={` absolute aspect-1/2 object-cover md:min-w-37vh min-w-50vh md:h-full bottom-0 right-0 top-0`} />
            </div>
            <div
                className={`relative h-screen font-custom2 px-4 max-sm:text-slate-700 sm:px-12 md:px-60 ld:px-80 sm:max-md:mb-12 duration-500 overflow-hidden ${(myContext.menu || myContext.title !== 'About') ? "mt--2 opacity-0" : " delay-300"}`} >
                <h1 className={`fixed pt-10 w-4/5 sm:w-1/2 md:w-3/4 text-4xl sm:text-6xl font-bold text-shadow sm:border-b-2 ${(myContext.theme) ? "border-slate-500" : "border-c1"}`}>ABOUT</h1>
                <div className='fixed overflow-auto mt-24 sm:mt-32 md:mt-48 bg-gradient text-md pr-4 sm:pr-20 md:pr-32 w-3/5 sm:max-md:w-1/2 '>
                    <p className=''>
                        Hey there! I'm just a regular guy who took the road less traveled. Formerly an industrial automation engineer, PLC programmer, and all-around maker, I decided to embrace the digital world as a developer. But don't worry, I didn't leave my old skills behind; instead, I fused them with the magic of digitalization to help designers bring their wildest ideas to life! <br />When I'm not coding up a storm, you'll find me exploring every nook and cranny of this beautiful planet. I'm a total travel junkie and a nature enthusiast. If you want a glimpse into my personal life, hop on over to my Instagram account.
                        <br />
                        So, whether you need a helping hand in the digital realm or want some travel inspiration, I've got you covered. Let's build, explore, and create some amazing things together!
                    </p>
                    <div className='flex md:flex-row flex-col md:gap-12 my-6 pb-8 sm:pr-4'>
                        <Link
                            to={CV}
                            target="_blank"
                            download
                            onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })}
                            onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })}
                            className='flex relative link-hover items-center gap-2 text-3xl w-fit pb-2 font-medium font-custom2 sm:mx-auto'>
                            <BiArrowToBottom className='animate-bounce ' />
                            <span>Resume</span>
                            <div className='mx-auto absolute bottom-0 left-0 w-0 h-10 border-b-4 border-c1 button-1'></div>
                        </Link>
                        <Link
                            to='/projects'
                            onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })}
                            onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })}
                            className='flex relative link-hover items-center gap-2 text-3xl w-fit pb-2 font-medium font-custom2 sm:mx-auto'>
                            <BiCodeAlt className='animate-pulse' />
                            <span>
                                Projects
                            </span>
                            <div className='mx-auto absolute bottom-0 left-0 w-0 h-10 border-b-4 border-c1 button-1'></div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutScreen