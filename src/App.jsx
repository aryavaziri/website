import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import Poker from "./screens/projects/Poker";
import Reframe from "./screens/projects/Reframe";
export const Context = createContext();

function App() {
  const [myContext, setMyContext] = useState({
    user: { name: '', email: '' },
    theme: false,
    language: 'en',
    title: 'Welcome',
    cursorh: false,
  })
  useEffect(() => {
    document.title = myContext.title
  }, [myContext]);

  const pointer = (e) => {
    let x = e.clientX
    let y = e.clientY + window.scrollY
    document.getElementById("pointer").style.left = (x - 24) + "px"
    document.getElementById("pointer").style.top = (y - 24) + "px"
  }


  return (
    <Context.Provider value={[myContext, setMyContext]}>
      <Router>
        <div onMouseMove={(e) => pointer(e)} className={`${myContext.theme ? `text-slate-800` : `text-c1`} h-screen`} >

          <div id="pointer" className={`${myContext.cursorh ? `cursor-hover` : ``} rounded-full bg-rose-500 h-12 w-12 absolute custom-pointer`} />
          <Header />
          <main className={`${myContext.theme ? `text-slate-700 bg-c1` : `text-c1 bg-slate-700`} absolute top-0 left-0 right-0 z-20 min-h-screen `}>
            <div className={``}>
              <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/projects/" element={<ProjectScreen />} />
                <Route exact path="/projects/reframe/" element={<Reframe />} />
                <Route exact path="/projects/poker/" element={<Poker />} />
                <Route exact path="/about/" element={<AboutScreen />} />
                <Route exact path="/contact/" element={<ContactScreen />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
