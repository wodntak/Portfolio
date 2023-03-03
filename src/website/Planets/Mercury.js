import React from 'react';
import mercurymenu from './MenuStyle/Mercury_menu.module.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Mercury = ({ mercuryshow, mercuryClose, mercuryShow, pagenumber}) => {


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
          <div id={mercurymenu.mercury_menumode} onClick={mercuryShow} pagenumber={pagenumber}/>
        </OverlayTrigger>

        <Modal
        show={mercuryshow}
        size="lg"
        id={mercurymenu.Modal}
        onHide={mercuryClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={mercurymenu.Modal_Header}>
          <Modal.Title className={mercurymenu.Modal_Title}>About Me</Modal.Title>
        </Modal.Header>
        <Modal.Body className={mercurymenu.Modal_Body}>
        <Carousel id={mercurymenu.Carousel} interval={null}>
      <Carousel.Item>
        <Container>
        <h3>반갑습니다, 프론트엔드 개발자를 꿈꾸는 <b>양재현</b>입니다.</h3>
        <Row style={{marginTop:"45px"}}>
            <Col className={mercurymenu.text}>
               <p className={mercurymenu.p}> <span className={mercurymenu.tag}>'일을 시작했다면 끝을 보라'</span> <br/> 한번 시작했다면 잘 풀리지 않더라고 포기하지 않고 주어진 일은 끝까지 해내는 개발자가 되고 싶습니다.</p>
                <br/>
                <br/>
                <p className={mercurymenu.p}> 대학을 다니고 개발을 시작하면서 눈에 바로 보여지고 머릿속의 그림들을 코딩으로 풀어내는 프론트엔드 개발에 흥미를 느껴 프론트엔드 개발자가 되고 싶다고 생각했습니다.</p>
            </Col>
            <Col className={mercurymenu.text}>
            <p className={mercurymenu.p}>개발자로서 물론 실력도 중요하지만 프론트엔드 개발자 혼자서 완성된 웹사이트를 만들 수 없듯이 여러 명의 사람들과 협업과 소통을 해야 하므로 협업과 소통이 제일 중요하다고 생각합니다.</p>
              <br/>
              <br/>
              <p className={mercurymenu.p}>모두에게 인정받고 실력 있는 <span className={mercurymenu.tag}>개발자</span>가 될 때까지 노력하도록 하겠습니다.</p>
            </Col>
        </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
      <Row id={mercurymenu.circleRow}>
        <Col id={mercurymenu.circle}>
            <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/FEE195/5912AB/badge.png"  alt="name"/>
            <span>이름</span>
            <h4> 양재현 </h4>
        </Col>
        <Col id={mercurymenu.circle}>
            <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/FEE195/5912AB/birthday.png"  alt="birthday"/>
            <span> 나이</span> 
            <h4>1996년 {<br></br>} 12월 12일생 </h4>
        </Col>
        <Col id={mercurymenu.circle}>
            <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/FEE195/5912AB/worldwide-location.png"  alt="address"/>
            <span>거주지</span>
            <h4>서울시 송파구</h4>
        </Col>
      </Row>
      <Row id={mercurymenu.circleRow}>
        <Col id={mercurymenu.circle}>
        <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/FEE195/5912AB/resume.png"  alt="experience"/>
            <span>경력</span>
            <h4>신입</h4>
        </Col>
        <Col id={mercurymenu.circle}>
        <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/E5B2CA/7028E4/nintendo-switch-pro-controller.png"  alt="hobby"/>
            <span>취미</span>
            <h4>풋살, 영화시청</h4>
        </Col>
        <Col id={mercurymenu.circle}>
        <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/FEE195/5912AB/new-post.png"  alt="email"/>
            <span>이메일</span>
            <h4>yyasu1212{<br></br>}@naver.com</h4>
        </Col>
      </Row>
      <Row id={mercurymenu.circleRow}>
        <Col id={mercurymenu.circle}>
        <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/E5B2CA/7028E4/apple-phone.png"  alt="phone"/>
            <span>연락처</span>
            <h4>010-4332-5132</h4>

        </Col>
        <Col id={mercurymenu.circle}>
        <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/E5B2CA/7028E4/best-seller.png"  alt="best"/>
            <span>특기</span>
            <h4>요리</h4>
        </Col>
        <Col id={mercurymenu.circle}>
        <img className={mercurymenu.icon} src="https://img.icons8.com/nolan/64/E5B2CA/7028E4/certificate.png"  alt="edu"/>
            <span>최종학력</span>
            <h4>University of Nebraska-Lincoln</h4>
        </Col>
      </Row>
    </Container>
      </Carousel.Item>

    </Carousel>
        </Modal.Body>
      </Modal>
        </>
    );
};

export default Mercury;