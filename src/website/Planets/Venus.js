import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import venusmenu from './MenuStyle/Venus_menu.module.scss'
import venusani from './AnimationStyle/Venus_animation.module.scss';


const Venus = ({checked, venusshow, venusClose, venusShow}) => {

    const renderTooltip = (props) => (
        <Tooltip id={venusmenu.Tooltip} {...props}>
          Education & Other Activities
          <p className={venusmenu.p}> 제 학력과 기타활동이 궁금하다면 클릭!</p>
        </Tooltip>
    );

    return (
        <>
        <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip}
        >
          {checked ? <div id={venusani.venus_animode}/> : <div id={venusmenu.venus_menumode} onClick={venusShow}/>}
        </OverlayTrigger>

        <Modal
        show={venusshow}
        size="lg"
        id={venusmenu.Modal}
        onHide={venusClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={venusmenu.Modal_Header}>
          <Modal.Title className={venusmenu.Modal_Title}>Education & Other Activities</Modal.Title>
        </Modal.Header>
        <Modal.Body className={venusmenu.Modal_Body}>
        <Carousel id={venusmenu.Carousel}>
      <Carousel.Item>
        <h3 className={venusmenu.h3_education}>Education (학력)</h3>
        <Container className={venusmenu.timeline}>
          <Row className={venusmenu.timeline_Rowedu}>
            <Col className={venusmenu.timelineitem}>
              Tanarata International School <br/>(고등학교 졸업, 말레이시아)            
            </Col >
            <Col className={venusmenu.timelinedate}>
              2010.08 - 2015.08
            </Col>
          </Row>
          <Row className={venusmenu.timeline_Rowedu}> 
            <Col className={venusmenu.timelineitem}>
            INTI International University <br/>(대학교 입학 및 편입, 말레이시아)
            </Col>
            <Col className={venusmenu.timelinedate}>
            2015.08 - 2017.01
            </Col>
          </Row>
          <Row className={venusmenu.timeline_Rowedu}>
            <Col className={venusmenu.timelineitem}>
            University of Nebraska-Lincoln<br/> (대학교 졸업, 미국 네브래스카주) <br/>
            <p>Computer Sceince major (컴퓨터 과학부)</p>
            </Col>
            <Col className={venusmenu.timelinedate}>
            2017.01 - 2022.05
            </Col>
          </Row>
        </Container>
       
      </Carousel.Item>

      <Carousel.Item>
        <h3 className={venusmenu.h3_others}>Other Activities (기타 활동)</h3>
        <Container className={venusmenu.timeline}>
          <Row className={venusmenu.timeline_Rowother}>
            <Col className={venusmenu.timelineitem}>
            Erudite Learning Lab Development Manager
             <br/>
            (학교 졸업작품, 자세한 사항은 프로젝트에 있습니다.)      
            </Col >
            <Col className={venusmenu.timelinedate}>
            2018.08 - 2019.05
            </Col>
          </Row>
          <Row className={venusmenu.timeline_Rowother}> 
            <Col className={venusmenu.timelineitem}>
            대한민국 육군 만기 전역
            </Col>
            <Col className={venusmenu.timelinedate}>
            2019.09 - 2021.04
            </Col>
          </Row>
          <Row className={venusmenu.timeline_Rowother}>
            <Col className={venusmenu.timelineitem}>
            이젠 아카데미 [프론트엔드개발] 리액트(React JS) 과정 수료
            </Col>
            <Col className={venusmenu.timelinedate}>
            2022.08 - 2022.11
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

export default Venus;