import React, { useEffect, useState, useRef } from 'react'
import './styles/base.sass'

import PhoneMenu from './components/PhoneMenu'
import Contact from './components/Contack'
import Skills from './components/Skills'
import Menu from './components/Menu'
import Home from './components/Home'
import Work from './components/Work'
import Projects from './components/Projects'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scroll, setScroll] = useState(0)
  const projects = useRef()
  const contact = useRef()
  const skills = useRef()
  const home = useRef()
  const work = useRef()

  const getFormattedDateTime = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("de-DE");
    const formattedTime = date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
    return `${formattedDate} ${formattedTime}`;
  };

  const html = document.getElementsByTagName('html')[0];

  useEffect(() => {
    const event = () => setScroll(html.scrollTop)
    window?.addEventListener('scroll', event)
    
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    (async() => {
      const locationReq = await fetch("https://ipapi.co/json/");
      const locationData = await locationReq.json();

      const visitData = {
        location: locationData.city,
        ip: locationData.ip,
        date: getFormattedDateTime(),
      }

      await fetch("https://topo-server-py.onrender.com/stats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(visitData),
      });
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="app-container">
      <Menu
        scroll={scroll}
        home={home}
        projects={projects}
        // work={work}
        skills={skills}
        contact={contact}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      ></Menu>
      {
        showMenu ?
          <PhoneMenu
            home={home}
            projects={projects}
            // work={work}
            skills={skills}
            contact={contact}
            setShowMenu={setShowMenu}
          ></PhoneMenu>
          :
          null
      }
      <>
        <Home forwardRef={home} next={projects}></Home>
        <Projects forwardRef={projects}></Projects>
        {/* <Work forwardRef={work}></Work> */}
        <Skills forwardRef={skills}></Skills>
        <Contact forwardRef={contact}></Contact>
      </>
    </div>
  );
}

export default App;
