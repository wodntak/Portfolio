import React, { useEffect } from 'react';
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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';




const Home = () => {

  const setScreen = () => {
    const vh =  window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }


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

    // useEffect(() => {
    //   setScreen();
    // },[])

    return (
    <>
      <div id={background.star1}></div>
      <div id={background.star2}></div>
      <div id={background.star3}></div>
      <div id={background.star4}></div>
        <Sun checked={checked} mercuryShow={mercuryShow} venusShow={venusShow} earthShow={earthShow} marsShow={marsShow} jupiterShow={jupiterShow} saturnShow={saturnShow} uranusShow={uranusShow} neptuneShow={neptuneShow}/>
        <Mercury checked={checked} mercuryshow={mercuryshow} mercuryClose={mercuryClose} mercuryShow={mercuryShow}/>
        {/* <Venus checked={checked} venusshow={venusshow} venusClose={venusClose} venusShow={venusShow}/>
        <Earth checked={checked} earthshow={earthshow} earthClose={earthClose} earthShow={earthShow}/>
        <Mars checked={checked} marsshow={marsshow} marsClose={marsClose} marsShow={marsShow}/>
        <Jupiter checked={checked} jupitershow={jupitershow} jupiterClose={jupiterClose} jupiterShow={jupiterShow}/>
        <Saturn checked={checked} saturnshow={saturnshow} saturnClose={saturnClose} saturnShow={saturnShow}/>
        <Uranus checked={checked} uranusshow={uranusshow} uranusClose={uranusClose} uranusShow={uranusShow}/>
        <Neptune checked={checked} neptuneshow={neptuneshow} neptuneClose={neptuneClose} neptuneShow={neptuneShow}/> */}
        
      <Form>
        <Form.Check 
        type="switch"
        id="custom-switch"
        className={background.switch}
        checked={checked}
        label={checked ? "애니메이션 모드 (미완성)" + window.innerWidth : "메뉴 모드" + window.innerHeight}
        onChange={(e) => setChecked(e.currentTarget.checked)} 
      />
        <Container>
          <Row>
            <Col id={!checked ? background.mobilemode : background.desktopmode}>
              <img className={background.introicon} src="https://img.icons8.com/external-bearicons-outline-color-bearicons/100/null/external-Space-location-bearicons-outline-color-bearicons.png" alt="spaceship"/>
              <h5 className={background.h5_intro}> Menu </h5>
            </Col>
            <Col>
              {/* <svg className={background.menuicon} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z" fill-rule="nonzero"/></svg>
              <h5 className={ background.h5_menu} > 여기를 클릭해보세요! </h5> */}
            </Col>
          </Row>
        </Container>
      </Form>
    </>

    );
};

export default Home;