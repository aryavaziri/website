import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'

function ProjectScreen() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Projects" })
    }, [])
    return (
        <div className={`duration-500 ${myContext.menu ? "opacity-0" : "opacity-100"}`} >ProjectScreen</div>
    )
}

export default ProjectScreen