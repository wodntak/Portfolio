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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';




const Home = () => {
    const [nextpage, setNextpage] = useState(true);

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
      <div id={background.star4}></div>
       {nextpage && <Sun mercuryShow={mercuryShow} venusShow={venusShow} earthShow={earthShow} marsShow={marsShow} jupiterShow={jupiterShow} saturnShow={saturnShow} uranusShow={uranusShow} neptuneShow={neptuneShow} nextpage={nextpage} setNextpage={setNextpage} />} 
       {nextpage && <Mercury mercuryshow={mercuryshow} mercuryClose={mercuryClose} mercuryShow={mercuryShow}/>}
       {nextpage && <Venus venusshow={venusshow} venusClose={venusClose} venusShow={venusShow}/>}
       {nextpage && <Earth earthshow={earthshow} earthClose={earthClose} earthShow={earthShow}/>}
       {nextpage && <Mars marsshow={marsshow} marsClose={marsClose} marsShow={marsShow}/>}
       {nextpage && <Jupiter jupitershow={jupitershow} jupiterClose={jupiterClose} jupiterShow={jupiterShow}/>}
       {nextpage && <Saturn saturnshow={saturnshow} saturnClose={saturnClose} saturnShow={saturnShow}/>}
       {!nextpage && <Uranus uranusshow={uranusshow} uranusClose={uranusClose} uranusShow={uranusShow}/>}
       {!nextpage &&<Neptune neptuneshow={neptuneshow} neptuneClose={neptuneClose} neptuneShow={neptuneShow}/>}
        
      {/* <Form>
        <Form.Check 
        type="switch"
        id="custom-switch"
        className={background.switch}
        checked={checked}
        label={checked ? "애니메이션 모드 (미완성)" : "메뉴 모드"}
        onChange={(e) => setChecked(e.currentTarget.checked)} 
      />
        
      </Form> */}
      <div id={nextpage ? background.mobilemode : background.desktopmode}>
        <img className={background.introicon} src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/null/external-Space-location-bearicons-outline-color-bearicons.png" alt="spaceship"/>
        <div className={background.h5_intro}> Menu </div>
      </div>   

      {nextpage ?
      <Container id={background.more1} onClick={() => setNextpage(!nextpage)}>
        <Row >
          <Col>
            <h3 className={background.click1}> 더보기 click!</h3>
          </Col>
          <Col>
            <img className={background.nextpageButton1} src="https://img.icons8.com/nolan/96/chevron-right.png" alt="nextpage1"/>
          </Col>
        </Row>
      </Container>
       : <Container id={background.more2} onClick={() => setNextpage(!nextpage)}>
         <Row>
          <Col>
            <h3 className={background.click2}> 더보기 click!</h3>
          </Col>
          <Col>
            <img className={background.nextpageButton2} src="https://img.icons8.com/nolan/96/1A6DFF/C822FF/chevron-left.png" alt="nextpage2"/>
          </Col>
        </Row>
      </Container>}

      
    </>

    );
}

export default Home;