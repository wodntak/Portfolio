import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import neptunemenu from './MenuStyle/Neptune_menu.module.scss';

const Neptune = ({neptuneshow, neptuneClose, neptuneShow ,pagenumber}) => {
    
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
          <div id={neptunemenu.neptune_menumode} onClick={neptuneShow} pagenumber={pagenumber}/>
        </OverlayTrigger>

        <Modal
        show={neptuneshow}
        size="lg"
        id={neptunemenu.Modal}
        onHide={neptuneClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={neptunemenu.Modal_Header}>
          <Modal.Title className={neptunemenu.Modal_Title}>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className={neptunemenu.Modal_Body}>
        <Container id={neptunemenu.Carousel}>
          <Row>
            <img className={neptunemenu.icon} src="https://img.icons8.com/cute-clipart/128/null/facebook.png" alt="" onClick={ ()=> window.open("https://www.facebook.com/yang.jaehyeon.7")}/>
            <span className={neptunemenu.icontext}>페이스북</span>
          </Row>
          <Row>
          <img className={neptunemenu.icon} src="https://img.icons8.com/cute-clipart/128/null/instagram-new.png" alt="" onClick={ ()=> window.open("https://www.instagram.com/ywogus96/")}/>
          <span className={neptunemenu.icontext}>인스타그램</span>
          </Row>
          <Row>
          <img className={neptunemenu.icon} src="https://img.icons8.com/cute-clipart/128/null/github.png" alt="" onClick={ ()=> window.open("https://github.com/wodntak")}/>
          <span className={neptunemenu.icontext}>깃헙</span>
          </Row>
          <Row>
          <img className={neptunemenu.icon} src="https://img.icons8.com/cute-clipart/128/null/line-me.png" alt="" onClick={ ()=> window.open("https://line.me/ti/p/QOrS8IPOTj")}/>
          <span className={neptunemenu.icontext}>라인</span>
          </Row>
        </Container>
        </Modal.Body>
      </Modal>
       
        </>
    );
};

export default Neptune;