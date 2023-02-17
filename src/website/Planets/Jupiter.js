import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
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
        <Carousel id={jupitermenu.Carousel} interval={null} touch={true} draggable={false}>
        <Carousel.Item>
              <Container id={jupitermenu.firstpage}>
                <Row className={jupitermenu.contentsRow}>
                  <Col xs={8} md={6} lg={6} className={jupitermenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'} variant="dark">
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/Home.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/About.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/Resume.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/Skills.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/Contact.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={4} md={6} lg={6} className={jupitermenu.contenttext}>
                  HTML, CSS, Javascript로 처음 제작해본 웹사이트입니다. 추후에 백엔드를 추가 함으로써 PHP로 제작하였습니다. 웹사이트를 제작할때 페이지 이동 없이 하나의 페이지에
                  모든 정보가 들어갈 수 있도록 스크롤하여 다음 페이지를 보는 형식으로 제작되었습니다.    
                  </Col>
                </Row>
                <Row className={jupitermenu.contentsRow}>
                <Col xs={4} md={6} lg={3} className={jupitermenu.contenttext}>
                  웹사이트의 footer 부분에는 처음페이지로 돌아갈 수 있는 버튼과 웹사이트 방문자의 숫자를 표시하였습니다. 방문자 숫자는 데이터베이스에 따로 저장 되어 누적 방문자 숫자를 표시합니다.
                  </Col>
                  <Col xs={8} md={6} lg={9} className={jupitermenu.contentimageCol}>
                      <img
                        id={jupitermenu.longimage}
                        src="./personal/footer.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
            <Container id={jupitermenu.firstpage}>
                <Row className={jupitermenu.contentsRow}>
                  <Col xs={8} md={6} lg={6} className={jupitermenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={false} controls={false} pause={'hover'} variant="dark">
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/signin.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/register.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={4} md={6} lg={6} className={jupitermenu.contenttext}>
                    로그인과 회원가입 화면입니다. 이름, 이메일, 아이디 형식을 정함으로 방문자들이 형식에 맞게 진행해야 로그인 및 회원가입이 진행되도록 하였습니다. 만약 형식에 맞지 않게 회원가입을 진행하였을시에는
                    alert창으로 잘못된 부분을 알려줄 수 있도록 제작하였습니다.
                  </Col>
                </Row>
                <Row className={jupitermenu.contentsRow}>
                <Col xs={4} md={6} lg={6} className={jupitermenu.contenttext}>
                    로그인이 성공했을때 보게 되는 페이지 입니다. 사용자의 이름을 표시하고 Contact 페이지에 새로운 메세지 페이지가 추가 되어 웹사이트의 관리자에게 메세지가 전송 될 수 있또록 하였습니다.
                    또한 자신이 보낸 메세지를 확인 할 수 있는 페이지도 만들어 사용자가 자신이 보낸 메세지들을 확인 할 수 있도록 하였습니다.
                  </Col>
                  <Col xs={8} md={6} lg={6} className={jupitermenu.contentimageCol}>
                  <img
                        id={jupitermenu.contentimage}
                        src="./"
                        className='img-thumbnail'
                        alt='...'
                      />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
            <Container id={jupitermenu.firstpage}>
                <Row className={jupitermenu.contentsRow}>
                  <Col xs={12} md={6} lg={6} className={jupitermenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'} variant="dark">
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./Erudite/page1.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./Erudite/page2.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./Erudite/page3.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={jupitermenu.contenttext}>
                  학생들의 성적을 관리 할 수 있는 페이지입니다. 게임별로 정확도와 반응시간 등을 수치로 나타내고 보기 쉽게 그래프로도 나타내 학생 개개인의 실력 향상을 쉽게 볼 수 있게 하였습니다. 데이터를 .csv파일로 변환하여
                  한번의 클릭으로 다운로드 할 수 있도록 하였습니다.

                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Row className={jupitermenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={jupitermenu.contentimageCol} >
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={jupitermenu.contentimage_icon} 
                  alt=""/>
                    <span className={jupitermenu.span}><b>기타 설명</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={jupitermenu.contenttext}>
                  이 프로젝트의 가장 큰 목표는 간결함이였습니다. 저희 프로젝트의 목표는 영유아들의 영어실력을 향상시키기 위함으로 영유아들의 학습을 최우선으로 게임 및 웹사이트를 최대한 간결하고 쉽게 만들기 위해 버튼들을 많이 사용하였으며, 
                  학부모들과 선생님들도 몇번의 클릭만으로 쉽게 유아들의 실력을 확인 할 수 있도록 제작되었습니다. 현재는 프로젝트와 웹사이트 모두 중단된 상태입니다.
                </Col>
              </Row>
              <Row className={jupitermenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={jupitermenu.contentimageCol}>
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={jupitermenu.contentimage_icon} 
                  alt=""/>
                    <span className={jupitermenu.span}><b>사용된 기술</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={jupitermenu.contenttext}>
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
              <Row className={jupitermenu.contentsRow}>
                <Col xs={4} md={4} lg={4} className={jupitermenu.contentimageCol}>
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={jupitermenu.contentimage_icon} 
                  alt=""/>
                    <span className={jupitermenu.span}><b>배운점</b></span>
                  </Col>
                <Col xs={8} md={8} lg={8} className={jupitermenu.contenttext}>
                  전체적으로 1년동안 이 프로젝트를 통해 새로운 언어 및 기술을 배웠을 뿐만 아니라 소통과 협업이 얼마나 중요한지 깨닫게 되는 경험이었습니다. 이 프로젝트는 작년의 그룹프로젝트를 개선, 새로운 게임 개발 및 웹사이트로 배포하는 프로젝트였습니다. 이미 시작된 프로젝트를 이어받아 개선하는 과정에서 처음부터 시작하는게 아닌 다른 사람의 프로젝트를 개선하기 위해서는
                  기존의 프로젝트를 완벽히 이해해야 했습니다. 그 뿐만이 아니라 새로운 게임을 만들면서 기존 프로젝트의 유지 개발 및 새로운 프로젝트까지 경험해 볼 수 있는 경험이었습니다. 매주 회의을 통해서 스폰서에게 저희의 성과를 보여줌과 동시에 피드백을 받고 그 피드백을 토대로
                  프로젝트를 진행해 나갔습니다. 저는 팀의 개발 매니저로써 각각 팀원들에게 개발 파트를 부여하고 매주 성과를 끝으로 점검하고 결과를 github의 main에 병합하였습니다.
                </Col>
              </Row>
            </Carousel.Item>

        </Carousel>
        </Modal.Body>
      </Modal>
       
        </>
    );
};

export default Jupiter;