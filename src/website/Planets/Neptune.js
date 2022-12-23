import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import neptunemenu from './MenuStyle/Neptune_menu.module.scss';
import neptuneani from './AnimationStyle/Neptune_animation.module.scss';

import { useState } from 'react';


const Neptune = ({checked}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const renderTooltip = (props) => (
        <Tooltip id={neptunemenu.Tooltip} {...props}>
          Contact Me
          <p className={neptunemenu.p}> 더 궁금하신게 있다면 연락주세요! </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip}
        >
            {checked ? <div id={neptuneani.neptune_animode}/> : <div id={neptunemenu.neptune_menumode} onClick={handleShow}/>}
        </OverlayTrigger>

        <Modal
        show={show}
        size="lg"
        id={neptunemenu.Modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={neptunemenu.Modal_Header}>
          <Modal.Title className={neptunemenu.Modal_Title}> Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body className={neptunemenu.Modal_Body}>
        <Carousel id={neptunemenu.Carousel}>
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

export default Neptune;