import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import sunmenuStyle from './MenuStyle/Sun_menu.module.scss';
import sunaniStyle from './AnimationStyle/Sun_animation.module.scss';
import Mercury from './Mercury';

import { useState } from 'react';


const Sun = ({checked, mercuryShow}, ...props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    const renderTooltip = (props) => (
        <Tooltip id={sunmenuStyle.Tooltip} {...props}>
          Menu
          <p className={sunmenuStyle.p}> 클릭해서 메뉴를 여세요!</p>
        </Tooltip>
    );

    return (
    <>
        <OverlayTrigger
        placement="right"
        overlay={renderTooltip}
        >
        {checked ? <div id={sunaniStyle.sun_animode}/>  : 
        <div onClick={toggleShow} className="me-2" id={sunmenuStyle.sun_menumode}>
        </div>}
        </OverlayTrigger>
        <Offcanvas id={sunmenuStyle.Offcanvas} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className={sunmenuStyle.Offcanvas_Header} closeButton closeVariant="white">
        </Offcanvas.Header>
        <Offcanvas.Title onClick={() => {mercuryShow(); toggleShow();}} className={sunmenuStyle.Offcanvas_Title}>About Me</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Education & Experience</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Skills</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Project 1 (Personal website)</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Project 2 (Erudite)</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Project 3 (Grocery shopping/Todos)</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Project 4 (Recommend Movie)</Offcanvas.Title>
        <Offcanvas.Title className={sunmenuStyle.Offcanvas_Title}>Contact Me</Offcanvas.Title>
       
        </Offcanvas>
    </>
    );
};

export default Sun;