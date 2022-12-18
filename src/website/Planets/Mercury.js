import React from 'react';
import mercurymenu from './MenuStyle/Mercury_menu.module.scss';
import mercuryani from './AnimationStyle/Mercury_animation.module.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';


const Mercury = ({checked}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderTooltip = (props) => (
        <Tooltip id={mercurymenu.Tooltip} {...props}>
          About Me
          <p className={mercurymenu.p}> 제 정보가 적혀있어요!</p>
        </Tooltip>
    );
    return (
        <>
        <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
            {checked ? <div id={mercuryani.mercury_animode}/> : <div id={mercurymenu.mercury_menumode} onClick={handleShow}/>}
        </OverlayTrigger>

        <Modal
        show={show}
        size="lg"
        id={mercurymenu.Modal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={mercurymenu.Modal_Header}>
          <Modal.Title className={mercurymenu.Modal_Title}>About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className={mercurymenu.Modal_Body}>
        <Carousel id={mercurymenu.Carousel}>
      <Carousel.Item>
        <h3>안녕하세요, 프론트엔드 개발자를 꿈꾸는 <b>양재현</b>입니다.</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
      <Row>
        <Col id={mercurymenu.aboutMefirst}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft}>
                <svg className={mercurymenu.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight}>
                   이름
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row}>
                양재현
            </Row>
        </Col>
        <Col id={mercurymenu.aboutMefirst}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft}>
                <svg className={mercurymenu.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight}>
                   이름
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row}>
                양재현
            </Row>
        </Col>
        <Col id={mercurymenu.aboutMefirst}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft}>
                <svg className={mercurymenu.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight}>
                   이름
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row}>
                양재현
            </Row>
        </Col>
      </Row>
    </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
        </>
    );
};

export default Mercury;