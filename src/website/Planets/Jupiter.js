import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import jupitermenu from './MenuStyle/Jupiter_menu.module.scss';
import jupiterani from './AnimationStyle/Jupiter_animation.module.scss';

const Jupiter = ({checked, jupitershow, jupiterClose, jupiterShow}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={jupitermenu.Tooltip} {...props}>
          Project 1
          <p className={jupitermenu.p}> 프로젝트에 대해서 </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
            {checked ? <div id={jupiterani.jupiter_animode}/> : <div id={jupitermenu.jupiter_menumode} onClick={jupiterShow}/>}
        </OverlayTrigger>

        <Modal
        show={jupitershow}
        size="lg"
        id={jupitermenu.Modal}
        onHide={jupiterClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={jupitermenu.Modal_Header}>
          <Modal.Title className={jupitermenu.Modal_Title}> Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body className={jupitermenu.Modal_Body}>
        <Carousel id={jupitermenu.Carousel}>
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

export default Jupiter;