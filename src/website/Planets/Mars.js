import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import marsmenu from './MenuStyle/Mars_menu.module.scss';
import './MenuStyle/Mars_menu.module.scss';



const Mars = ({ marsshow, marsClose, marsShow, pagenumber}) => {
    
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
      <div id={marsmenu.mars_menumode} onClick={marsShow} pagenumber={pagenumber}/>
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
          <Carousel id={marsmenu.Carousel} interval={null} touch={true} draggable={false}>
            <Carousel.Item>
              <Container id={marsmenu.firstpage}>
                <Row className={marsmenu.contentsRow}>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'} variant="dark">
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/Eruditemain.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/showcase.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contenttext}>
                    <b>Erudite</b>는 대학교 4학년 그룹 프로젝트의 팀명이며, 이때 진행했던 프로젝트는 "First Steps to Reading Fluency"입니다. 영유아들이 게임을 통해 더 쉽게 영어단어의 발음을 익히기 쉽게 하기 위해 제작되었습니다.
    
                  </Col>
                </Row>
                <Row className={marsmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={marsmenu.contenttext}>
                    게임의 로그인 화면입니다. 영유아들이 쉽게 로그인하기 위해 그림으로 비밀번호를 대체하였으며 정보 보호를 위해 비밀번호는 데이터베이스에 저장될 때 암호화하여 저장하였습니다.
                  </Col>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={false} controls={false} pause={'hover'} >
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/Login_scene.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/Login_scene2.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
            <Container id={marsmenu.firstpage}>
                <Row className={marsmenu.contentsRow}>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={false} controls={false} pause={'hover'}>
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/Game4(treasure).png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/Game4.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contenttext}>
                    게임의 진행화면입니다. 각 단어의 소리와 함께 카운트다운이 시작되며 클릭 시 애니메이션과 함께 정답은 다이아몬드, 오답은 돌덩이로 나타냈습니다.
                  </Col>
                </Row>
                <Row className={marsmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={marsmenu.contenttext}>
                    게임 결과 화면입니다. 정확도에 따라 문구가 다르게 나타나며 게임 종료 시 결과는 웹사이트로 보내져 기록되게 됩니다.
                  </Col>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contentimageCol}>
                  <img
                        id={marsmenu.contentimage}
                        src="./Erudite/game_result.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
            <Container id={marsmenu.firstpage}>
                <Row className={marsmenu.contentsRow}>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'} variant="dark">
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/page1.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/page2.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={marsmenu.contentimage}
                        src="./Erudite/page3.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={marsmenu.contenttext}>
                  학생들의 성적을 관리 할 수 있는 페이지입니다. 게임별로 정확도와 반응시간 등을 수치로 나타내고 보기 쉽게 그래프로도 나타내 학생 개개인의 실력 향상을 쉽게 볼 수 있게 하였습니다. 데이터를 .CSV 파일로 변환하여
                  한 번의 클릭으로 다운로드 할 수 있도록 하였습니다.

                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Row className={marsmenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={marsmenu.contentimageCol} >
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={marsmenu.contentimage_icon} 
                  alt=""/>
                    <span className={marsmenu.span}><b>기타 설명</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={marsmenu.contenttext}>
                  이 프로젝트의 가장 큰 목표는 간결함이었습니다. 저희 프로젝트의 목표는 영유아들의 영어 실력을 향상하기 위함으로 영유아들의 학습을 최우선으로 게임 및 웹사이트를 최대한 간결하고 쉽게 만들기 위해 버튼들을 많이 사용하였으며, 
                  학부모들과 선생님들도 몇 번의 클릭만으로 쉽게 유아들의 실력을 확인할 수 있도록 제작되었습니다. 현재는 프로젝트와 웹사이트 모두 중단된 상태입니다.
                </Col>
              </Row>
              <Row className={marsmenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={marsmenu.contentimageCol}>
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={marsmenu.contentimage_icon} 
                  alt=""/>
                    <span className={marsmenu.span}><b>사용된 기술</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={marsmenu.contenttext}>
                <Badge pill bg="primary">
                  HTML
                </Badge>{' '}
                <Badge pill bg="primary">
                  Javascript
                </Badge>{' '}
                <Badge pill bg="primary">
                  Bootstrap
                </Badge>{' '}
                <Badge pill bg="primary">
                  CSS
                </Badge>{' '}
                <Badge pill bg="success">
                  C#
                </Badge>{' '}
                <Badge pill bg="success">
                  ASP.NET
                </Badge>{' '}
                <Badge pill bg="success">
                  MySQL
                </Badge>{' '}
                <Badge pill bg="light" text="dark">
                  Unity
                </Badge>{''}
                <Badge pill bg="light" text="dark">
                  C++
                </Badge>{' '}
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className={marsmenu.contentsRow}>
                <Col xs={4} md={4} lg={4} className={marsmenu.contentimageCol}>
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={marsmenu.contentimage_icon} 
                  alt=""/>
                    <span className={marsmenu.span}><b>배운점</b></span>
                  </Col>
                <Col xs={8} md={8} lg={8} className={marsmenu.contenttext}>
                  전체적으로 1년동안, 이 프로젝트를 통해 새로운 언어 및 기술을 배웠을 뿐만 아니라 소통과 협업이 얼마나 중요한지 깨닫게 되는 경험이었습니다. 이 프로젝트는 작년의 그룹프로젝트를 개선, 새로운 게임 개발 및 웹사이트로 배포하는 프로젝트였습니다. 이미 시작된 프로젝트를 이어받아 개선하는 과정에서 처음부터 시작하는 게 아닌 다른 사람의 프로젝트를 개선하기 위해서는
                  기존의 프로젝트를 완벽히 이해해야 했습니다. 그뿐만이 아니라 새로운 게임을 만들면서 기존 프로젝트의 유지 개발 및 새로운 프로젝트까지 경험해 볼 수 있는 경험이었습니다. 매주 회의를 통해서 스폰서에게 저희의 성과를 보여줌과 동시에 피드백을 받고 그 피드백을 토대로
                  프로젝트를 진행해 나갔습니다. 저는 팀의 개발 매니저로서 각각 팀원들에게 개발 파트를 부여하고 매주 성과를 끝으로 점검하고 결과를 github의 main에 병합하였습니다.
                </Col>
              </Row>
            </Carousel.Item>

          </Carousel>
        </Modal.Body>
      </Modal>
       
        </>
    );
};

export default Mars;

