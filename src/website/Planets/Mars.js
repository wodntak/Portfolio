import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import marsmenu from './MenuStyle/Mars_menu.module.scss';
import marsani from './AnimationStyle/Mars_animation.module.scss';

import { useState } from 'react';


const Mars = ({checked}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const renderTooltip = (props) => (
        <Tooltip id={marsmenu.Tooltip} {...props}>
          Project 1
          <p className={marsmenu.p}> 프로젝트에 대해서 </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip}
        >
            {checked ? <div id={marsani.mars_animode}/> : <div id={marsmenu.mars_menumode} onClick={handleShow}/>}
        </OverlayTrigger>

        <Modal
        show={show}
        size="lg"
        id={marsmenu.Modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={marsmenu.Modal_Header}>
          <Modal.Title className={marsmenu.Modal_Title}> Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body className={marsmenu.Modal_Body}>
        <Carousel id={marsmenu.Carousel}>
      <Carousel.Item>
      </Carousel.Item>

      <Carousel.Item>
        
      </Carousel.Item>

    </Carousel>
        </Modal.Body>
      </Modal>
       
        </>
    );
};

export default Mars;