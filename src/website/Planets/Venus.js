import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import venusmenu from './MenuStyle/Venus_menu.module.scss'
import venusani from './AnimationStyle/Venus_animation.module.scss';

import { useState } from 'react';


const Venus = ({checked}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderTooltip = (props) => (
        <Tooltip id={venusmenu.Tooltip} {...props}>
          Education & Experience
          <p className={venusmenu.p}> 제 학력과 경력이 궁금하다면 클릭!</p>
        </Tooltip>
    );

    return (
        <>
        <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip}
        >
            {checked ? <div id={venusani.venus_animode}/> : <div id={venusmenu.venus_menumode} onClick={handleShow}/>}
        </OverlayTrigger>

        <Modal
        show={show}
        size="lg"
        id={venusmenu.Modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={venusmenu.Modal_Header}>
          <Modal.Title className={venusmenu.Modal_Title}>Education & Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body className={venusmenu.Modal_Body}>
        <Carousel id={venusmenu.Carousel}>
      <Carousel.Item>
        <h3>Education</h3>
      </Carousel.Item>

      <Carousel.Item>
        
      </Carousel.Item>

    </Carousel>
        </Modal.Body>
      </Modal>

        </>
    );
};

export default Venus;