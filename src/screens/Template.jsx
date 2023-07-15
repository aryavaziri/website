import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";

function ProjectScreen() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Projects" })
    }, [])
    return (
        <div
            className={`${(myContext.theme) ? "border-slate-500" : "border-c1"} relative max-h-screen w-screen font-custom2 px-4 sm:px-24 md:px-40 duration-500 overflow-hidden ${(myContext.menu || myContext.title !== 'Projects') ? "mt--2 opacity-0" : " delay-300"}`} >
            <h1 className={`fixed px-4 pt-10 text-4xl sm:text-6xl font-bold border-inherit text-shadow `}>
                Projects
            </h1>
            <div className={`bg-gradient2 overflow-auto mt-24 py-4`}>

            </div>

        </div>
    )
}

export default ProjectScreen