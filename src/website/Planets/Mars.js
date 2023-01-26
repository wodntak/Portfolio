import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import marsmenu from './MenuStyle/Mars_menu.module.scss';


const Mars = ({ marsshow, marsClose, marsShow}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={marsmenu.Tooltip} {...props}>
          프로젝트 1
          <p className={marsmenu.p}> Erudite Learning Lab </p>
        </Tooltip>
    );
    

    return (
    <>
      <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip}
      >
      <div id={marsmenu.mars_menumode} onClick={marsShow}/>
      </OverlayTrigger>

      <Modal
      show={marsshow}
      size="lg"
      id={marsmenu.Modal}
      onHide={marsClose}
      backdrop="static"
      keyboard={false}
      centered
      >
        <Modal.Header  closeButton closeVariant="white" className={marsmenu.Modal_Header}>
          <Modal.Title className={marsmenu.Modal_Title}> 프로젝트 1 (Erudite Learning Lab) </Modal.Title>
        </Modal.Header>
        <Modal.Body className={marsmenu.Modal_Body}>
          <Carousel id={marsmenu.Carousel} interval={null}>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    사진
                  </Col>
                  <Col>
                    diafd
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

export default Mars;