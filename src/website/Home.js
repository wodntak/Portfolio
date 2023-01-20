import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
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

    const [checked, setChecked] = useState(false);
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

    return (
    <>
      <div id={background.star1}></div>
      <div id={background.star2}></div>
      <div id={background.star3}></div>
      {/* <div id={background.star4}></div> */}
        <Sun checked={checked} mercuryShow={mercuryShow} venusShow={venusShow} earthShow={earthShow} marsShow={marsShow} jupiterShow={jupiterShow} saturnShow={saturnShow} uranusShow={uranusShow} neptuneShow={neptuneShow}/>
        <Mercury checked={checked} mercuryshow={mercuryshow} mercuryClose={mercuryClose} mercuryShow={mercuryShow}/>
        <Venus checked={checked} venusshow={venusshow} venusClose={venusClose} venusShow={venusShow}/>
        <Earth checked={checked} earthshow={earthshow} earthClose={earthClose} earthShow={earthShow}/>
        <Mars checked={checked} marsshow={marsshow} marsClose={marsClose} marsShow={marsShow}/>
        <Jupiter checked={checked} jupitershow={jupitershow} jupiterClose={jupiterClose} jupiterShow={jupiterShow}/>
        <Saturn checked={checked} saturnshow={saturnshow} saturnClose={saturnClose} saturnShow={saturnShow}/>
        <Uranus checked={checked} uranusshow={uranusshow} uranusClose={uranusClose} uranusShow={uranusShow}/>
        <Neptune checked={checked} neptuneshow={neptuneshow} neptuneClose={neptuneClose} neptuneShow={neptuneShow}/>
        
      <Form>
        <Form.Check 
        type="switch"
        id="custom-switch"
        className={background.switch}
        checked={checked}
        label={checked ? "애니메이션 모드 (미완성)" : "메뉴 모드"}
        onChange={(e) => setChecked(e.currentTarget.checked)} 
      />
        
      </Form>
      <div id={!checked ? background.mobilemode : background.desktopmode}>
        <img className={background.introicon} src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Space-location-bearicons-outline-color-bearicons.png" alt="spaceship"/>
        <div className={background.h5_intro}> Menu </div>

      </div>   
    </>

    );
};

export default Home;