import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import sunmenuStyle from './MenuStyle/Sun_menu.module.scss';
import sunaniStyle from './AnimationStyle/Sun_animation.module.scss';

import { useState } from 'react';


const Sun = ({checked}, ...props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
        {checked ? <div id={sunaniStyle.sun_animode}/>  : 
        <div onClick={toggleShow} className="me-2" id={sunmenuStyle.sun_menumode}>
        </div>}

        <Offcanvas id={sunmenuStyle.Offcanvas} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className={sunmenuStyle.Offcanvas_Header} closeButton closeVariant="white">
        </Offcanvas.Header>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>About Me</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Skills</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Projects</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Contact Me</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Education</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Others</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>1</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>2</Offcanvas.Title>
        </Offcanvas>
    </>
    );
};

export default Sun;