import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'
import IMG1 from "../../static/img/projects/Casinoa.jpg";
import { Link } from "react-router-dom";
import { BsForward } from "react-icons/bs";
import { BsSkipStart } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";

function Poker() {
    const [myContext, setMyContext] = useContext(Context);
    useEffect(() => {
        setMyContext({ ...myContext, title: "Poker" })
    }, [])
    return (
        <div
            // style={{backgroundImage: `url(${Noise}`, opacity: "40%"}}
            className={`${myContext.theme ? `border-vr2 text-vr2 bg-vr` : `border-vr1 text-slate-200 bg-vr`} relative w-screen font-custom2 px-4 sm:px-24 md:px-40 pb-12 duration-500 text-lg overflow-hidden ${(myContext.menu || myContext.title !== 'Poker') ? "mt--2 opacity-0" : " delay-300"}`} >
            <div className='rounded-b-[50px] overflow-hidden h-[50vh]'>
                <img className='object-cover w-full h-full' src={IMG1} alt="" />
            </div>

            <h1 className={`${myContext.theme ? `text-vr2 border-vr2` : `border-poker text-poker`} px-4 pt-10 pb-2 w-full text-4xl sm:text-6xl font-bold border-b-2 `}>
                CASINOA, Online poker game
            </h1>
            <div className='sm:flex justify-between my-6'>
                <div className='basis-1/3 flex flex-col gap-2 p-2'>
                    <div className='flex gap-2 items-baseline'>
                        <div className={`${myContext.theme ? `text-vr2` : `text-poker`} w-24 font-bold text-right text-xl`}>Techsnologies:</div>
                        <div>Django / Python / React / Postgresql / NGINX / Redis / Redux / Docker </div>
                    </div>
                    <div className='flex gap-2 items-baseline'>
                        <div className={`${myContext.theme ? `text-vr2 border-vr2` : `border-poker text-poker`} w-24 font-bold text-right text-xl`}>Date:</div>
                        <div>Nov 2022 - Jun 2023</div>
                    </div>
                </div>
                <div className='basis-2/3 p-2 font-[500] text-2xl'>Casinoa, is a dynamic and interactive platform built using Django and React. The project leverages the Django framework on the server-side, handling the game logic, database management, and user authentication. React, on the other hand, powers the dynamic frontend, delivering a seamless and responsive user interface. </div>
            </div>
            <div className='my-12'>
                <div className={`${myContext.theme ? `text-vr2 border-vr2` : `border-poker text-poker`} border-b-2 text-3xl p-2 font-bold mb-6`} >Concept</div>
                <p className='text-justify'>The backend of the application is powered by Django, a Python-based framework known for its robustness and versatility. Django offers a convenient solution for implementing AI bots and managing the underlying database, making it an ideal choice for creating a platform that can support the development of an AI player.<br />While the AI player development is still in progress, the current iteration of the Poker Web Application offers an exciting multiplayer experience with virtual currency. Users can create personalized accounts, participate in multiplayer games, and compete against friends or other players online.<br />By providing a platform for multiplayer gameplay, this project allows players to engage in exciting poker matches using virtual money. This multiplayer functionality serves as a foundation for gathering valuable data, which will be instrumental in refining the AI player's strategy and improving its performance over time.</p>
            </div>
            <div className='my-8'>
                <div className={`${myContext.theme ? `text-vr2 border-vr2` : `border-poker text-poker`} border-b-2 text-3xl p-2 font-bold `} >Key Features</div>
                <ul className='mt-4 sm:pt-16 gap-4 flex flex-col'>
                    <li className='w-full flex flex-col sm:flex-row items-baseline'>
                        <div className={`w-full sm:w-1/4 sm:text-end px-4 text-2xl font-semibold ${myContext.theme ? `text-vr2 border-poker` : `text-poker`}`}>JSON Web Token</div>
                        <div className='w-full sm:w-3/4 justify'>provide a secure and password-free authentication method for apps. With JWT, sensitive user credentials are never stored, reducing the risk of data breaches. Tokens contain encrypted authentication data, eliminating the need for frequent database queries. JWT ensures secure access to protected resources and improves app scalability.</div>
                    </li>
                    <li className='w-full flex flex-col sm:flex-row items-baseline'>
                        <div className={`w-full sm:w-1/4 sm:text-end px-4 text-2xl font-semibold ${myContext.theme ? `text-vr2 border-poker` : `text-poker`}`}>Docker</div>
                        <div className='w-full sm:w-3/4 justify'>Using Docker to containerize your app has numerous advantages. It enables easy and quick installation on servers, making deployment faster. With one line of code, anyone can install the open-source application on their server. Docker ensures consistent environments, promotes development conventions, and simplifies scaling.</div>
                    </li>
                    <li className='w-full flex flex-col sm:flex-row items-baseline'>
                        <div className={`w-full sm:w-1/4 sm:text-end px-4 text-2xl font-semibold ${myContext.theme ? `text-vr2 border-poker` : `text-poker`}`}>Redux</div>
                        <div className='w-full sm:w-3/4 justify'>By combining Redux with React, you have achieved a scalable, fast, and well-structured application. Redux reduces server pressure, optimizes resource usage, and provides a predictable state management approach. This combination enhances performance, facilitates code organization, and promotes code reusability.</div>
                    </li>
                    <li className='w-full flex flex-col sm:flex-row items-baseline'>
                        <div className={`w-full sm:w-1/4 sm:text-end px-4 text-2xl font-semibold ${myContext.theme ? `text-vr2 border-poker` : `text-poker`}`}>Web-Sockets</div>
                        <div className='w-full sm:w-3/4 justify'>By using Django Channels and Redis, your multiplayer game application benefits from real-time communication through websockets. Players can engage in a live chatroom and receive updates from the PostgreSQL database.</div>
                    </li>
                </ul>
            </div>
            <hr className={`${myContext.theme ? `border-vr2` : `border-poker`} border my-8`}/>

            <div className='flex-wrap flex-row flex w-full sm:w-fit gap-4 mx-auto text-3xl justify-evenly'>
                <Link className="btn-primary max-sm:text-lg bg-poker2 max-sm:w-2/5">
                    <BsSkipStart className='w-8'/>
                    <div>Back</div>
                </Link>
                <Link className="btn-primary max-sm:text-lg bg-poker2 max-sm:w-2/5">
                    <BsGithub className='w-8'/>
                    <div>Source Code</div>
                </Link>
                <Link className="btn-primary max-sm:text-lg bg-poker2 max-sm:w-2/5">
                    <ImNewTab className='w-8'/>
                    <div>Visit Project</div>
                </Link>
                <Link className="btn-primary max-sm:text-lg bg-poker2 max-sm:w-2/5">
                    <BsForward className='w-8'/>
                    <div>Next Project</div>
                </Link>

            </div>
        </div>
    )
}

export default Poker