import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import saturnmenu from './MenuStyle/Saturn_menu.module.scss';


const Saturn = ({ saturnshow, saturnClose, saturnShow, pagenumber}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={saturnmenu.Tooltip} {...props}>
          프로젝트 3
          <p className={saturnmenu.p}> 장볼때 유용하게 쓸 수 있는 Todo 프로젝트 입니다. </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip}
        >
            
            <section id={saturnmenu.saturn_menumode} onClick={saturnShow} pagenumber={pagenumber}> <section id={saturnmenu.saturn_bottom} /> <section id={saturnmenu.saturn_ring} pagenumber={pagenumber}/> 
            <section id={saturnmenu.saturn_top} /></section>
        </OverlayTrigger>

        <Modal
        show={saturnshow}
        size="lg"
        id={saturnmenu.Modal}
        onHide={saturnClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={saturnmenu.Modal_Header}>
          <Modal.Title className={saturnmenu.Modal_Title}> 프로젝트 3 (장보기 / Todos)</Modal.Title>
        </Modal.Header>
        <Modal.Body className={saturnmenu.Modal_Body}>
        <Carousel id={saturnmenu.Carousel}>
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

export default Saturn;
















