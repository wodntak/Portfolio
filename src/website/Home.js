import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import background from './Home.module.scss';
import aniStyle from './Animation.module.scss';
import menuStyle from './Menu.module.scss';
import Sun from './Planets/Sun.js';
import Mercury from './Planets/Mercury';

import { useState } from 'react';




const Home = () => {
    const [checked, setChecked] = useState(false);
  

    return (
    <>
        <div id={background.star1}></div>
        <div id={background.star2}></div>
        <div id={background.star3}></div>
        <div id={background.star4}></div>
        <Sun checked={checked}/>
        <Mercury checked={checked}/>
        <div id= {checked ? aniStyle.venus_animode : menuStyle.venus_menumode}></div>
        <div id= {checked ? aniStyle.earth_animode : menuStyle.earth_menumode}></div>
        <div id= {checked ? aniStyle.mars_animode : menuStyle.mars_menumode}></div>
        <div id= {checked ? aniStyle.jupiter_animode : menuStyle.jupiter_menumode}></div>
        {checked ? <div id={aniStyle.saturn_animode}/>   : <div id={menuStyle.saturn_menumode}> <div id={menuStyle.saturn_bottom}/> <div id={menuStyle.saturn_ring}/> <div id={menuStyle.saturn_top}/></div>}
        <div id= {checked ? aniStyle.uranus_animode : menuStyle.uranus_menumode}></div>
        <div id= {checked ? aniStyle.neptune_animode : menuStyle.neptune_menumode}></div>

    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        style={{"margin-left":"62%"}}
        checked={checked}
        label={checked ? "애니메이션 모드" : "메뉴 모드" }
        onChange={(e) => setChecked(e.currentTarget.checked)} 
      />
      
    </Form>
      
    </>

    );
};

export default Home;