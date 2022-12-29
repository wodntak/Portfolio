import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import earthmenu from './MenuStyle/Earth_menu.module.scss';
import earthani from './AnimationStyle/Earth_animation.module.scss';



const Earth = ({checked, earthshow, earthClose, earthShow}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={earthmenu.Tooltip} {...props}>
          Skills
          <p className={earthmenu.p}> 제가 다룰 수 있는 스킬들을 적어놨어요!</p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
            {checked ? <div id={earthani.earth_animode}/> : <div id={earthmenu.earth_menumode} onClick={earthShow}/>}
        </OverlayTrigger>

        <Modal
        show={earthshow}
        size="lg"
        id={earthmenu.Modal}
        onHide={earthClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={earthmenu.Modal_Header}>
          <Modal.Title className={earthmenu.Modal_Title}>Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body className={earthmenu.Modal_Body}>
        <Carousel id={earthmenu.Carousel} interval={null}>
      <Carousel.Item>
        <Container>
          <h3> Frontend </h3>
          <Row>
          
            <Col>
                <img className={earthmenu.icon} src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" width="35" alt="javascript" />
                Javascript
              <ProgressBar className={earthmenu.progress} animated now={80} />
            </Col>
            <Col>
            
            </Col>
          </Row>
        </Container>
       
      </Carousel.Item>

      <Carousel.Item>
        
      </Carousel.Item>

    </Carousel>
        </Modal.Body>
      </Modal>
       
        </>
    );
};

export default Earth;