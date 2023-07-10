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

    const themHandler = () => {
        setMyContext({ ...myContext, theme: !myContext.theme })
    }

    const titleHandler = (val) => {
        setMenu(!menu);
        setMyContext({ ...myContext, menu: !menu, title: val })
        // menuHandler()
    }

    const menuHandler = () => {
        setMenu(!menu)
        setMyContext({ ...myContext, menu: !menu })
    }
    return (
        <div className={`${myContext.theme ? `text-slate-800` : `text-slate-100`} font-custom1`}>
            <div className='header w-full absolute top-1/8 left-0'>
                <div className='h-12 nav flex w-full px-20 justify-between '>
                    <Link to={`/`} className="flex items-end h-full">
                        <img className="h-full float-right" alt="LOGO" src={Logo} />
                        {/* <div className={` ${myContext.menu ? "opacity-100" : "opacity-0"} mx-16 text-xl align-bottom`} >Page title</div> */}
                    </Link>
                    <div className='flex items-end flex-row-reverse h-full'>
                        <button className='mb-1 ms-2' onClick={() => menuHandler()}>
                            <Menu />
                        </button>
                        <div className={`rounded-full mx-2 border p-1 aspect-square w-9 text-center border-2 duration-200 cursor-pointer ${myContext.theme ? "hover:text-slate-100 hover:bg-slate-800 border-slate-800" : "hover:text-slate-800 hover:bg-slate-100 border-slate-100"} ${myContext.menu ? "opacity-100" : "opacity-0"}`}>EN</div>
                        <button onClick={() => themHandler()} className={`mx-1 p-1 text-3xl duration-200 ${myContext.menu ? "opacity-100" : "opacity-0"}`}>
                            {myContext.theme ? <HiSun /> : <HiMoon />}
                        </button>
                    </div>
                </div>
                <div className={`w-full px-52 menu-list mt-8 duration-500 overflow-hidden`}>
                    <ul className='w-full'>
                        <li onClick={() => titleHandler("Welcome")} className={`text-6xl py-4 ${myContext.menu ? "menu-item-show" : ""} ${(myContext.title === "Welcome") ? "text-orange-600" : ""}  font-extrabold`}>
                            <Link to={`/`}>
                                HOME
                            </Link>
                        </li>
                        <li onClick={() => titleHandler("Projects")} className={`text-6xl py-4 ${myContext.menu ? "menu-item-show" : ""} ${(myContext.title === "Projects") ? "text-orange-600" : ""}  font-extrabold`}>
                            <Link to={`/projects`}>
                                PROJECTS
                            </Link>
                        </li>
                        <li onClick={() => titleHandler("About me")} className={`text-6xl py-4 ${myContext.menu ? "menu-item-show" : ""} ${(myContext.title === "About me") ? "text-orange-600" : ""}  font-extrabold`}>
                            <Link to={`/about`}>
                                ABOUT
                            </Link>
                        </li>
                        <li onClick={() => titleHandler("Contact")} className={`text-6xl py-4 ${myContext.menu ? "menu-item-show" : ""} ${(myContext.title === "Contact") ? "text-orange-600" : ""}  font-extrabold`}>
                            <Link to={`/contact`}>
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