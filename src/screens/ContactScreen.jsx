import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import { Link } from "react-router-dom";
import { BiArrowToBottom } from "react-icons/bi";
import { BiArrowFromBottom } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

const Social = ({ type }) => {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        console.log(type)
    }, [])
    return (
        <div>
            <Link className={`flex gap-2 border items-center px-1 ${myContext.menu ? "delay-700" : ""} `} to={`/contact`}>
                <BiArrowToBottom className='' />
                <p>{type}</p>
            </Link>
        </div>
    )
}

const Input = ({ title, onValueChange }) => {
    const [myContext, setMyContext] = useContext(Context);
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState()
    const [inputType, setInputType] = useState('text')

    useEffect(() => {
        switch (title) {
            case 'email':
                setInputType('email');
                break;
            case 'price':
                setInputType('number');
                break;
            case 'age':
                setInputType('date');
                break;
            case 'password':
                setInputType('password');
                break;
            default:
                setInputType('text')
        }
        onValueChange(value)
    }, [value])


    return (
        <div className={`overflow-hidden font-medium text-inherit bg-inherit p-2 relative`}>
            <div className={`${(!myContext.theme) ? "bg-slate-700" : "bg-c1"} h-6 left-4 top-[-8px] z-10 absolute duration-1000 ease-out overflow-hidden ${isFocused || value ? 'w-auto px-2' : 'w-0'}`}>{title}</div>
            {title === 'Message'
                ? <textarea
                    name='Name'
                    type={inputType}
                    placeholder={isFocused ? "" : title}
                    className={`w-full px-4 rounded ${(isFocused || !value) ? '' : ''} h-32 text-2xl drop-shadow-lg bg-inherit border-2 ${(myContext.theme) ? "border-slate-500" : "border-c1"} `}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => { setValue(e.target.value) }}
                />
                : <input
                    name='Name'
                    type={inputType}
                    placeholder={isFocused ? "" : title}
                    className={`w-full px-4 rounded ${(isFocused || !value) ? '' : ''} h-12 text-3xl drop-shadow-lg bg-inherit border-2 ${(myContext.theme) ? "border-slate-500" : "border-c1"} `}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => { setValue(e.target.value) }}
                />}
        </div>
    )
}

function ContactScreen() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Contact" })
    }, [])
    return (
        <div
            className={`${(myContext.theme) ? "border-slate-500" : "border-c1"} relative max-h-screen w-screen font-custom2 px-4 sm:px-24 md:px-40 duration-500 overflow-hidden ${(myContext.menu || myContext.title !== 'Contact') ? "mt--2 opacity-0" : " delay-300"}`} >
            <h1 className={`fixed px-4 pt-10 text-4xl sm:text-6xl font-bold border-inherit text-shadow `}>
                Contact
            </h1>
            <div className={`md:grid bg-gradient2 overflow-auto mt-24 sm:mt-32 py-4 grid-cols-2 gap-4`}>
                <form method='POST' action='/contact' className='flex flex-col md:px-8 gap-2 text-lg max-md:pb-8'>
                    <Input
                        title='Name'
                        onValueChange={(e) => { console.log(e) }}
                    />
                    <Input
                        title='Email'
                        onValueChange={(e) => { console.log(e) }}
                    />
                    <Input
                        title='Subject'
                        onValueChange={(e) => { console.log(e) }}
                    />
                    <Input
                        title='Message'
                        onValueChange={(e) => { console.log(e) }}
                    />
                    <button
                        target="_blank"
                        download
                        onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })}
                        onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })}
                        className={`flex justify-center mx-auto relative items-center gap-2 text-2xl border-2 w-fit rounded h-12 max-w-full w-52 min-w-fit px-4 font-medium font-custom2 hover:text-3xl ${(myContext.theme) ? "border-slate-500" : "border-c1"} `}>
                        <span>Submit</span>
                        <BiArrowFromBottom className='' />
                    </button>
                </form>
                {/* <hr className='my-8 sm:hidden' /> */}
                <div className={`flex flex-col gap-4 h-fit md:shadow-arya rounded-lg mx-auto p-4 w-4/5 md:order-first`}>
                    <div className='pb-2 flex flex-col text-2xl'>
                        <h1
                            className={`text-3xl flex gap-2 items-center`}>
                            <MdOutlineMailOutline />
                            Email
                        </h1>
                        <Link
                            className='text-xl pl-4 flex items-center hover:text-2xl h-10'
                            to={'mailto:arya.vaziri@gmail.com'}>
                            <BiChevronRight />
                            arya.vaziri@gmail.com
                        </Link>
                        <Link
                            className='text-xl pl-4 flex items-center hover:text-2xl h-10'
                            to={'mailto:info@aaryaa.ir'}>
                            <BiChevronRight />
                            info@aaryaa.ir
                        </Link>
                    </div>
                    <div className='pb-2 flex flex-col text-2xl'>
                        <h1
                            className={`text-3xl flex gap-2 items-center`}>
                            <BsTelephone />
                            Telephone
                        </h1>
                        <div
                            className='text-xl pl-4 flex items-center hover:text-2xl h-10'>
                            <BiChevronRight />
                            +31 6 87 410328
                        </div>
                    </div>
                    <div className='pb-2 flex flex-col text-2xl'>
                        <h1
                            className={`text-3xl flex gap-2 items-center`}>
                            Follow me
                        </h1>
                        <div className='text-3xl flex justify-evenly w-full p-2'>
                            <Link
                                className='flex h-12 w-12 items-center hover:text-6xl'
                                to={'mailto:info@aaryaa.ir'}>
                                <FiInstagram />
                            </Link>
                            <Link
                                className='flex h-12 w-12 items-center hover:text-6xl'
                                to={'mailto:info@aaryaa.ir'}>
                                <FiGithub />
                            </Link>
                            <Link
                                className='flex h-12 w-12 items-center hover:text-6xl'
                                to={'mailto:info@aaryaa.ir'}>
                                <FiLinkedin />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactScreen