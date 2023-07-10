import React from 'react'
import { Context } from '../App'
import { useState, useContext } from "react";

function Menu() {
    const [myContext, setMyContext] = useContext(Context);

    return (
        <div className={`grid grid-cols-3 menu relative ${myContext.menu ? 'menu-open' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={`menu-hover absolute rounded-md`}></div>
            <div className={`menu-hover absolute rounded-md`}></div>
        </div>
    )
}

export default Menu