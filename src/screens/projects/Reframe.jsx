import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../../App'
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import IMG1 from "../../static/img/projects/reframe/ReframePost.png";
import Noise from "../../static/img/noise.png";

function Reframe() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Reframe" })
    }, [])
    return (
        <div 
            // style={{backgroundImage: `url(${Noise}`, opacity: "40%"}}
            className={`${myContext.theme ? `border-vr2 text-vr2 bg-vr1` : `border-vr1 text-slate-200 bg-vr2`} relative w-screen font-custom2 px-4 sm:px-24 md:px-40 pb-12 duration-500 overflow-hidden ${(myContext.menu || myContext.title !== 'Reframe') ? "mt--2 opacity-0" : " delay-300"}`} >
            <img className='object-cover w-full z-9910 absolute inset-0' src={Noise} alt="" />
            <div className='rounded-b-[50px] overflow-hidden'> 
                <img className='object-contain w-full' src={IMG1} alt="" />
                </div>

            <h1 className={`${myContext.theme ? `text-vr2` : `text-vr1`} px-4 pt-10 pb-2 w-full text-4xl sm:text-6xl font-bold border-inherit text-shadow border-b-2 `}>
                Reframe, A Travelling Art Piece
            </h1>
            <div className='sm:flex justify-between my-6'>
                <div className='basis-1/3 flex flex-col gap-2 p-2'>
                    <div className='flex gap-2 items-baseline'>
                        <div className={`${myContext.theme ? `text-vr2` : `text-vr1`} w-24 text-right text-xl`} >Client:</div>
                        <div>Civic Interaction Design</div>
                    </div>
                    <div className='flex gap-2 items-baseline'>
                        <div className={`${myContext.theme ? `text-vr2` : `text-vr1`} w-24 text-right text-xl`}>Techsnologies:</div>
                        <div>C#/UNITY, 3D, VR</div>
                    </div>
                    <div className='flex gap-2 items-baseline'>
                        <div className={`${myContext.theme ? `text-vr2` : `text-vr1`} w-24 text-right text-xl`}>Date:</div>
                        <div>Nov - Dec 2022</div>
                    </div>
                </div>
                <div className='basis-2/3 p-2 text-justify'>Reframe is a VR experience that focuses on the Dutch occupation of Brazil (1630-1654). It's a poly-narrative that sheds light on those hidden voices and untold stories. But it does more; it makes us aware of our biases and blind spots by raising an interesting question: Might the same institutional biases we 'accuse' museums of still be present in some unforeseen way, neatly hidden in the systems, frameworks, and technology we use – and if so, can Reframe address that problem too?</div>
            </div>
            <div>
                <div className={`${myContext.theme ? `text-vr2` : `text-vr1`} text-2xl p-2`}>Design Proposal</div>
                <p className='text-justify'>In the VR experience, users will find themselves in front of View of Itamaracá Island, Brazil (1637) by Frans Post, where they will be able to interact with some elements of the painting. They hear a different story than the idyllic one created by the Dutch painter. A lot is not being told by him. Reframe fills this hiatus. <br /> It confronts users with a different narrative. While interacting with the painting, users hear voice recordings of Brazilians with different backgrounds who describe what they see when they look at the painting. These personal stories are added to engage the user, unlock multiple perspectives, and to get across how colonization is still affecting many lives nowadays. It does so in a 'strange loop' kind of way as well.</p>
            </div>
        </div>
    )
}

export default Reframe