import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './Home.module.scss';
import Sun from './Planets/Sun.js';
import Mercury from './Planets/Mercury';
import Venus from './Planets/Venus';
import Earth from './Planets/Earth';
import Mars from './Planets/Mars';
import Jupiter from './Planets/Jupiter';
import Saturn from './Planets/Saturn';
import Uranus from './Planets/Uranus';
import Neptune from './Planets/Neptune';

import { useState } from 'react';




const Home = () => {
    const [nextpage, setNextpage] = useState(true);
    const [swap, setSwap] = useState(0);

    const [mercuryshow, setMercury] = useState(false);
    const [venusshow, setVenus] = useState(false);
    const [earthshow, setEarth] = useState(false);
    const [marsshow, setMars] = useState(false);
    const [jupitershow, setJupiter] = useState(false);
    const [saturnshow, setSaturn] = useState(false);
    const [uranusshow, setUranus] = useState(false);
    const [neptuneshow, setNeptune] = useState(false);

    const mercuryClose = () => setMercury(false);
    const venusClose = () => setVenus(false);
    const earthClose = () => setEarth(false);
    const marsClose = () => setMars(false);
    const jupiterClose = () => setJupiter(false);
    const saturnClose = () => setSaturn(false);
    const uranusClose = () => setUranus(false);
    const neptuneClose = () => setNeptune(false);

    const mercuryShow = () => setMercury(true);
    const venusShow = () => setVenus(true);
    const earthShow = () => setEarth(true);
    const marsShow = () => setMars(true);
    const jupiterShow = () => setJupiter(true);
    const saturnShow = () => setSaturn(true);
    const uranusShow = () => setUranus(true);
    const neptuneShow = () => setNeptune(true);

    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const nextpagefunction = async event =>{
      setSwap(1);
      await delay(2000);  
      setNextpage(!nextpage); 
      console.log(swap);

    }

    return (
    <div id={background.bodyy}>
      <div id={background.star1} swap={swap} onAnimationEnd={() => setSwap(0)}></div>
      <div id={background.star2} ></div>
      <div id={background.star3} ></div>
      <div id={background.star4} swap={swap} onAnimationEnd={() => setSwap(0)}></div>
       {nextpage && <Sun mercuryShow={mercuryShow} venusShow={venusShow} earthShow={earthShow} marsShow={marsShow} jupiterShow={jupiterShow} saturnShow={saturnShow} uranusShow={uranusShow} neptuneShow={neptuneShow} nextpage={nextpage} setNextpage={setNextpage} swap={swap} setSwap={setSwap} />} 
       {nextpage && <Mercury mercuryshow={mercuryshow} mercuryClose={mercuryClose} mercuryShow={mercuryShow}/>}
       {nextpage && <Venus venusshow={venusshow} venusClose={venusClose} venusShow={venusShow}/>}
       {nextpage && <Earth earthshow={earthshow} earthClose={earthClose} earthShow={earthShow}/>}
       {nextpage && <Mars marsshow={marsshow} marsClose={marsClose} marsShow={marsShow}/>}
       {nextpage && <Jupiter jupitershow={jupitershow} jupiterClose={jupiterClose} jupiterShow={jupiterShow}/>}
       {nextpage && <Saturn saturnshow={saturnshow} saturnClose={saturnClose} saturnShow={saturnShow}/>}
       {!nextpage && <Uranus uranusshow={uranusshow} uranusClose={uranusClose} uranusShow={uranusShow}/>}
       {!nextpage &&<Neptune neptuneshow={neptuneshow} neptuneClose={neptuneClose} neptuneShow={neptuneShow}/>}
      
      <div id={nextpage ? background.mobilemode : background.desktopmode}>
        <img className={background.introicon} src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Space-location-bearicons-outline-color-bearicons.png" alt="spaceship"/>
        <div className={background.h5_intro}> Menu </div>
      </div>   

      {nextpage ?
      <div id={background.more1} onClick={() => nextpagefunction()}>
        <p className={background.click1}> 더보기 click!</p>
        <img className={background.nextpageButton1} src="https://img.icons8.com/nolan/96/chevron-right.png" alt="nextpage1"/>
      </div>
      : <div id={background.more2} onClick={() => nextpagefunction()}>
          <img className={background.nextpageButton2} src="https://img.icons8.com/nolan/96/1A6DFF/C822FF/chevron-left.png" alt="nextpage2"/>
          <p className={background.click2}> 더보기 click!</p>
        </div>}

      
    </div>

    );
}

export default Home;