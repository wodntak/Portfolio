import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import saturnmenu from './MenuStyle/Saturn_menu.module.scss';
import saturnani from './AnimationStyle/Saturn_animation.module.scss';


const Saturn = ({checked, saturnshow, saturnClose, saturnShow}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={saturnmenu.Tooltip} {...props}>
          Project 1
          <p className={saturnmenu.p}> 프로젝트에 대해서 </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip}
        >
            {checked ? <div id={saturnani.saturn_animode}/>   :
            <section id={saturnmenu.saturn_menumode} onClick={saturnShow}> <section id={saturnmenu.saturn_bottom}/> <section id={saturnmenu.saturn_ring}/> 
            <section id={saturnmenu.saturn_top} /></section>}        
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
          <Modal.Title className={saturnmenu.Modal_Title}> Project 1</Modal.Title>
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
















