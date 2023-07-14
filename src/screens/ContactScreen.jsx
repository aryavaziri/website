import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'

function ContactScreen() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Contact" })
    }, [])
    return (
        <div className={`duration-500 ${myContext.menu ? "opacity-0" : "opacity-100"}`} >Contact</div>
    )
}

export default ContactScreen