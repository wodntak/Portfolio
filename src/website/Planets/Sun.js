import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import sunmenuStyle from './MenuStyle/Sun_menu.module.scss';

import { useState } from 'react';


const Sun = ({ mercuryShow, venusShow, earthShow, marsShow, jupiterShow, saturnShow, uranusShow, neptuneShow, setNextpage, nextpage}, ...props) => {
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

        <div onClick={toggleShow} className="me-2" id={sunmenuStyle.sun_menumode}>
        </div>
        </OverlayTrigger>
        <Offcanvas id={sunmenuStyle.Offcanvas} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className={sunmenuStyle.Offcanvas_Header} closeButton closeVariant="white">
        </Offcanvas.Header>
        <Offcanvas.Title onClick={() => {mercuryShow(); toggleShow();}} className={sunmenuStyle.Offcanvas_Title}>About Me</Offcanvas.Title>
        <Offcanvas.Title onClick={() => {venusShow(); toggleShow();}} className={sunmenuStyle.Offcanvas_Title}>Education & Experience</Offcanvas.Title>
        <Offcanvas.Title onClick={() => {earthShow(); toggleShow();}} className={sunmenuStyle.Offcanvas_Title}>Skills</Offcanvas.Title>
        <Offcanvas.Title onClick={() => {marsShow(); toggleShow();}} className={sunmenuStyle.Offcanvas_Title}>Project 1 (대학교 졸업작품)</Offcanvas.Title>
        <Offcanvas.Title onClick={() => {jupiterShow(); toggleShow();}} className={sunmenuStyle.Offcanvas_Title}>Project 2 (개인 홈페이지)</Offcanvas.Title>
        <Offcanvas.Title onClick={() => {saturnShow(); toggleShow();}} className={sunmenuStyle.Offcanvas_Title}>Project 3 (장보기/Todos)</Offcanvas.Title>
        <Offcanvas.Title onClick={() => {uranusShow(); toggleShow(); setNextpage(!nextpage);}} className={sunmenuStyle.Offcanvas_Title}>Project 4 (포트폴리오)</Offcanvas.Title>
        <Offcanvas.Title onClick={() => {neptuneShow(); toggleShow(); setNextpage(!nextpage);}} className={sunmenuStyle.Offcanvas_Title}>Contact Me</Offcanvas.Title>
       
        </Offcanvas>
    </>
    );
};

export default Sun;