import React, { useState, useContext } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BiCaretRightCircle } from "react-icons/bi";

function HomeScreen() {
    const [myContext, setMyContext] = useContext(Context);
    return (
        <div className={`px-20 pt-40 duration-500 ${myContext.menu ? 'opacity-0' : 'opacity-100'}`}>
            <h1 className='text-4xl text-center font-black'>Hey, My name is Arya</h1>
            <h4 className='text-2xl px-20 my-8 text-center font-bold gradient-text'>Welcome to my personal website! As a former industrial automation engineer and manufacturer, I have transitioned into a fulfilling career as a developer. Explore my projects and learn more about my journey and expertise in programming.</h4>
            <div className='flex mx-auto w-80 font-semibold justify-between text-2xl'>
                <Link className='link-hover relative flex gap-2 items-center pb-2 gradient-text2 gradient-text' to={`/about`}>
                    <BiCaretRightCircle />
                    <span>
                        About me
                    </span>
                    <div className='absolute top-0 left-0 w-0 h-full border-b-2 button-1'></div>
                </Link>
                <Link className='link-hover relative flex gap-2 items-center pb-2' to={`/projects`}>
                    <BiCaretRightCircle />
                    <span>
                        Projects
                    </span>
                    <div className='absolute top-0 left-0 w-0 h-full border-b-2 button-1'></div>
                </Link>
            </div>
        </div>
    )
}

export default HomeScreen