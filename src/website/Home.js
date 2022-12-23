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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const mercuryShow = () => setShow(true);
    const venusShow = () => setShow(true);
    const earthShow = () => setShow(true);
    const MarsShow = () => setShow(true);
  

    return (
    <>
        <div id={background.star1}></div>
        <div id={background.star2}></div>
        <div id={background.star3}></div>
        <div id={background.star4}></div>
        <Sun checked={checked} mercuryShow={mercuryShow}/>
        <Mercury checked={checked} show={show} handleClose={handleClose} mercuryShow={mercuryShow}/>
        <Venus checked={checked}/>
        <Earth checked={checked}/>
        <Mars checked={checked}/>
        <Jupiter checked={checked}/>
        <Saturn checked={checked}/>
        <Uranus checked={checked}/>
        <Neptune checked={checked}/>

    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        className={background.switch}
        checked={checked}
        label={checked ? "애니메이션 모드" : "메뉴 모드" }
        onChange={(e) => setChecked(e.currentTarget.checked)} 
      />
      
    </Form>
      
    </>

    );
};

export default Home;