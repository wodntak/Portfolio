import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jupitermenu from './MenuStyle/Jupiter_menu.module.scss';

const Jupiter = ({ jupitershow, jupiterClose, jupiterShow, pagenumber}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={jupitermenu.Tooltip} {...props}>
          프로젝트 2
          <p className={jupitermenu.p}> 처음 만들어본 개인 웹사이트입니다! </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
          <div id={jupitermenu.jupiter_menumode} onClick={jupiterShow} pagenumber={pagenumber}/>
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
          <Modal.Title className={jupitermenu.Modal_Title}> 프로젝트 2 (개인 웹사이트)</Modal.Title>
        </Modal.Header>
        <Modal.Body className={jupitermenu.Modal_Body}>
        <Carousel id={jupitermenu.Carousel} interval={null}>
      <Carousel.Item>
        <Container>
          <Row>
            <Col>
              사진
            </Col>
            <Col>
              설명
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

export default Jupiter;