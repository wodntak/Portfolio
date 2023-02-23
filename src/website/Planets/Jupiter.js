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
                  <Col xs={12} md={6} lg={6} className={jupitermenu.contentimageCol}>
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
                  <Col xs={12} md={6} lg={6} className={jupitermenu.contenttext}>
                  HTML, CSS, Javascript로 처음 제작해본 웹사이트입니다. 추후에 백엔드를 추가 함으로써 PHP로 제작하였습니다. 웹사이트를 제작할때 페이지 이동 없이 하나의 페이지에
                  모든 정보가 들어갈 수 있도록 스크롤하여 다음 페이지를 보는 형식으로 제작되었습니다.    
                  </Col>
                </Row>
                <Row className={jupitermenu.contentsRow}>
                <Col xs={12} md={6} lg={3} className={jupitermenu.contenttext}>
                  웹사이트의 footer 부분에는 처음페이지로 돌아갈 수 있는 버튼과 웹사이트 방문자의 숫자를 표시하였습니다. 방문자 숫자는 데이터베이스에 따로 저장 되어 누적 방문자 숫자를 표시합니다.
                  </Col>
                  <Col xs={12} md={6} lg={9} className={jupitermenu.contentimageCol}>
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
                  <Col xs={12} md={6} lg={6} className={jupitermenu.contentimageCol}>
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
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/error1.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/error2.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={jupitermenu.contenttext}>
                    로그인과 회원가입 화면입니다. 이름, 이메일, 아이디 형식을 정함으로 방문자들이 형식에 맞게 진행해야 로그인 및 회원가입이 진행되도록 하였습니다. 만약 형식에 맞지 않게 회원가입을 진행하였을시에는
                    alert창으로 잘못된 부분을 알려줄 수 있도록 제작하였습니다.
                  </Col>
                </Row>
                <Row className={jupitermenu.contentsRow}>
                <Col xs={12} md={6} lg={3} className={jupitermenu.contenttext}>
                    로그인이 성공했을때 보게 되는 페이지 입니다. 사용자의 이름을 표시하고 로그아웃을 누를 시 처음 화면으로 돌아가게 됩니다. My Messages 버튼을 누를 시 사용자가 보냈던 메세지들을
                    한번에 확인 할 수 있도록 하였습니다.
                  </Col>
                  <Col xs={12} md={6} lg={9} className={jupitermenu.contentimageCol}>
                  <img
                        id={jupitermenu.longimage2}
                        src="./personal/loggedin.png"
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
                        src="./personal/contact_loggedin.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/message.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/message_error1.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/message_sent.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/message_error2.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={jupitermenu.contentimage}
                        src="./personal/messagepage.png"
                        className='img-thumbnail'
                        alt='...'
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={jupitermenu.contenttext}>
                   로그인이 성공했을경우 보게되는 Contact페이지 입니다. 로그인한 사용자는 메세지를 보낼 수 있는 기능이 추가 되어있고 메세지를 보낼때 입력 양식과 데이터베이스 입력 값이 일치 하지 않는다면 에러 메세지를 띄우고,
                   메세지가 성공적으로 보내져 데이터베이스에 들어가게 되면 성공했다는 메세지를 띄웁니다. 메뉴바에 "My Messages"를 클릭할 시에 보이는 메세지 페이지는 지금까지 사용자가 보낸 메세지를 한번에 확인 할 수 있도록 하였습니다.

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
                  이 웹사이트는 처음 제작해본 포트폴리오용 웹사이트 입니다. 스크롤 형식의 웹사이트로 페이지 이동 없이 한 페이지에서 모든 정보를 볼 수 있도록 제작되었습니다. 사용자들이 보다 재미있게 사이트를 접할 수 있도록 버튼이나 애니메이션들을 
                  넣어서 제작하였습니다. 
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
                  PHP
                </Badge>{' '}
                <Badge pill bg="success">
                  MySQL
                </Badge>{' '}
                <Badge pill bg="light" text="dark">
                  MAMP
                </Badge>{''}
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
                  이 웹사이트를 제작하면서 PHP와 Bootstrap을 처음 접해봤으며, 웹 개발의 Frontend와 Backend를 동시에 경험해 볼 수 있는 기회였습니다. 처음에 HTML로 제작되었던 페이지를
                  PHP로 바꾸게 되면서 발생하는 오류들을 고치면서 PHP에 대해 많이 배웠으며 Bootstrap의 많은 기능들을 시도해볼 수 있는 좋은 기회였습니다.
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