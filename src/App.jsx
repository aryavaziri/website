import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
export const Context = createContext();

function App() {
  const [myContext, setMyContext] = useState({
    user: { name: '', email: '' },
    theme: false,
    language: 'en',
    title: 'Welcome'
  })
  // useEffect(() => {
  //   document.title = myContext.title
  // }, [myContext]);


  return (
    <Context.Provider value={[myContext, setMyContext]}>
      <Router>
        <Header />
        <main className={`${myContext.theme ? `text-slate-800 bg-slate-200` : `text-slate-100 bg-slate-700`} min-h-screen `}>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/projects/" element={<ProjectScreen />} />
            <Route exact path="/about/" element={<AboutScreen />} />
            <Route exact path="/contact/" element={<ContactScreen />} />
          </Routes>
        </main>
      </Router>
    </Context.Provider>
  );
}

export default App;
