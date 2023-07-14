import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BiCaretUpCircle } from "react-icons/bi";

function HomeScreen() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Welcome" })
    }, [])
    return (
        <div className={`duration-700 px-20 ${(myContext.menu || myContext.title !== 'Welcome') ? "mt--1 opacity-0" : "pt-40 "}`}>
            <h1 className='text-4xl text-center font-black'>Hey, My name is Arya</h1>
            <h1 className='text-3xl p-2 text-center font-medium'>Welcome to my personal website!</h1>
            <h4 className='text-2xl mx-40 p-2 my-6 text-center font-medium'>As a former industrial automation engineer and manufacturer, I have transitioned into a fulfilling career as a developer. Explore my projects and learn more about my journey and expertise in programming.</h4>
            <div className='flex mx-auto w-80 font-semibold justify-between text-2xl'>
                <Link onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })} onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })} className='link-hover relative flex gap-4 items-center pb-2 gradient-text' to={`/about`}>
                    <div className='rotate-90'>
                        <BiCaretUpCircle className='animate-bounce' />
                    </div>
                    <span>
                        About me
                    </span>
                    <div className='absolute top-0 left-0 w-0 h-full border-b-2 button-1'></div>
                </Link>
                <Link onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })} onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })} className={`link-hover relative flex gap-4 items-center pb-2`} to={`/projects`}>
                    <div className='rotate-90'>
                        <BiCaretUpCircle className='animate-bounce' />
                    </div>
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