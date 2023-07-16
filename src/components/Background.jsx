import React from 'react'
import { Context } from '../App'
import { useState, useContext } from "react";
import Noise from "../static/img/noise.png";
import Noise2 from "../static/img/noise2.png";

function Background({ gradient, gradient2, noise }) {
    const [myContext, setMyContext] = useContext(Context);

    return (
        <div className='w-screen h-screen bg-slate-700 fixed overflow-hidden z-[-100]'>

            <div className='w-full h-full bg-dark'>
                {gradient && <div className='w-screen h-screen absolute gradient' />}
                {gradient2 &&
                    <>
                        <div className='w-screen h-screen absolute gradient gradient-2' />
                        <div className='w-screen h-screen absolute gradient gradient-2' />
                        <div className='w-screen h-screen absolute gradient gradient-2' />
                    </>
                }
                {noise && <img src={Noise2} alt="" />}
            </div>
        </div>
    )
}

export default Background