import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../App'
import Menu from "./Menu";
import Logo from "../static/img/logo.png";
import { HiSun } from "react-icons/hi2";
import { HiMoon } from "react-icons/hi";
import { Link } from "react-router-dom";


function Header() {
    const [myContext, setMyContext] = useContext(Context);
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        document.title = myContext.title;
        console.log(myContext)
    }, [myContext]);

    const themHandler = (e) => {
        e.stopPropagation();
        setMenu(!menu)
        setMyContext({ ...myContext, menu: !menu, theme: !myContext.theme })
    }

    const titleHandler = (e, val) => {
        e.stopPropagation();
        if (menu) { setMenu(!menu); }
        // setMyContext({ ...myContext, menu: !menu, title: val })
        setMyContext({ ...myContext, menu: !menu })
        // menuHandler()
    }

    const menuHandler = () => {
        setMenu(!menu)
        setMyContext({ ...myContext, menu: !menu })
    }
    return (
        <div onClick={myContext.menu ? () => menuHandler() : () => { }} className={`duration-1000 overflow-hidden font-custom2 w-full fixed top-0 pt-8 sm:pt-12 lg:pt-24 left-0 z-30`}>
            <div className='header w-full'>
                <div className='h-12 nav flex w-full px-4 sm:px-12 lg:px-20 justify-between overflow-hidden'>
                    <Link to={`/`} className={`flex`}>
                        <img className={`h-full object-fill ${myContext.menu ? "mt-0" : "mt--2"}`} alt="LOGO" src={Logo} />
                        {/* <div className={` ${myContext.menu ? "opacity-100" : "opacity-0"} mx-16 text-xl align-bottom`} >Page title</div> */}
                    </Link>
                    <div className='flex items-end flex-row-reverse h-full'>
                        <button className='mb-1 ms-2' onClick={() => menuHandler()} onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })} onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })}>
                            <Menu />
                        </button>
                        <div
                            onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })}
                            onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })}
                            className={`rounded-full mx-2 border p-1 aspect-square w-9 text-center border-2 duration-200 cursor-pointer 
                            ${myContext.theme ? "hover:text-slate-100 hover:bg-slate-800 border-slate-800" : "hover:text-slate-800 hover:bg-slate-100 border-c1"} 
                            ${myContext.menu ? "mb-0" : "mb-12"}`} >
                            EN
                        </div>
                        <button onMouseEnter={() => setMyContext({ ...myContext, cursorh: true })} onMouseLeave={() => setMyContext({ ...myContext, cursorh: false })} onClick={(e) => themHandler(e)} className={`mx-1 p-1 text-3xl duration-200 ${myContext.menu ? "mb-0" : "mb-12"}`}>
                            {myContext.theme ? <HiMoon /> : <HiSun />}
                        </button>
                    </div>
                </div>
                <div className={`w-full px-12 md:px-32 lg:px-52 menu-list mt-8 duration-500 overflow-hidden`}>
                    <ul className='w-full'>
                        <li onClick={() => menuHandler()} className={`text-5xl md:text-6xl ${myContext.menu ? "menu-item-show my-6" : "my-0"} ${(myContext.title === "Welcome") ? "text-orange-400" : ""}  font-extrabold`}>
                            <Link className={`${myContext.menu ? "delay-400" : "delay-300"} `} to={`/`}>
                                HOME
                            </Link>
                        </li>
                        <li onClick={() => menuHandler()} className={`text-5xl md:text-6xl ${myContext.menu ? "menu-item-show my-6" : "my-0"} ${(myContext.title === "Projects") ? "text-orange-400" : ""}  font-extrabold`}>
                            <Link
                                className={`${myContext.menu ? "delay-500" : "delay-200"} `} to={`/projects`}>
                                PROJECTS
                            </Link>
                        </li>
                        <li onClick={() => menuHandler()} className={`text-5xl md:text-6xl ${myContext.menu ? "menu-item-show my-6" : "my-0"} ${(myContext.title === "About") ? "text-orange-400" : ""}  font-extrabold`}>
                            <Link className={`${myContext.menu ? "delay-600" : "delay-100"} `} to={`/about`}>
                                ABOUT
                            </Link>
                        </li>
                        <li onClick={() => menuHandler()} className={`text-5xl md:text-6xl ${myContext.menu ? "menu-item-show my-6" : "my-0"} ${(myContext.title === "Contact") ? "text-orange-400" : ""}  font-extrabold`}>
                            <Link className={`${myContext.menu ? "delay-700" : ""} `} to={`/contact`}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header