import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import uranusmenu from './MenuStyle/Uranus_menu.module.scss';

const Uranus = ({ uranusshow, uranusClose, uranusShow, pagenumber}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={uranusmenu.Tooltip} {...props}>
          Project 4 (준비중)
          <p className={uranusmenu.p}> 장볼때 유용하게 쓸 수 있는 Todo 프로젝트 입니다. </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
          <div id={uranusmenu.uranus_menumode} onClick={uranusShow} pagenumber={pagenumber}/>
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
          <Modal.Title className={uranusmenu.Modal_Title}> Project 4 (장보기/Todos) - 개발중</Modal.Title>
        </Modal.Header>
        <Modal.Body className={uranusmenu.Modal_Body}>
        <Carousel id={uranusmenu.Carousel}>
          <Carousel.Item>
          </Carousel.Item>

        </Carousel>
        </Modal.Body> 
        </Modal>
       
        </>
    );
};

export default Uranus;