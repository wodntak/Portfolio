import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import uranusmenu from './MenuStyle/Uranus_menu.module.scss';
import uranusani from './AnimationStyle/Uranus_animation.module.scss';

const Uranus = ({checked, uranusshow, uranusClose, uranusShow}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={uranusmenu.Tooltip} {...props}>
          Project 1
          <p className={uranusmenu.p}> 프로젝트에 대해서 </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
            {checked ? <div id={uranusani.uranus_animode}/> : <div id={uranusmenu.uranus_menumode} onClick={uranusShow}/>}
        </OverlayTrigger>

        <Modal
        show={uranusshow}
        size="lg"
        id={uranusmenu.Modal}
        onHide={uranusClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={uranusmenu.Modal_Header}>
          <Modal.Title className={uranusmenu.Modal_Title}> Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body className={uranusmenu.Modal_Body}>
        <Carousel id={uranusmenu.Carousel}>
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

export default Uranus;