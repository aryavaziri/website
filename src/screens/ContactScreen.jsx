import React, { useState, useContext } from 'react'
import { Context } from '../App'

function ContactScreen() {
    const [myContext, setMyContext] = useContext(Context);
    return (
        <div className={`duration-500 ${myContext.menu ? "opacity-0" : "opacity-100"}`} >Contact</div>
    )
}

export default ContactScreen