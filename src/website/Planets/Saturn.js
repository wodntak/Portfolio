import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import saturnmenu from './MenuStyle/Saturn_menu.module.scss';


const Saturn = ({ saturnshow, saturnClose, saturnShow, pagenumber}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={saturnmenu.Tooltip} {...props}>
          프로젝트 3
          <p className={saturnmenu.p}> 포트폴리오용 웹사이트 입니다. </p>
        </Tooltip>
    );
    

    return (
        <>
         <OverlayTrigger
        placement="bottom"
        overlay={renderTooltip}
        >
            
            <section id={saturnmenu.saturn_menumode} onClick={saturnShow} pagenumber={pagenumber}> <section id={saturnmenu.saturn_bottom} /> <section id={saturnmenu.saturn_ring} pagenumber={pagenumber}/> 
            <section id={saturnmenu.saturn_top} /></section>
        </OverlayTrigger>

        <Modal
        show={saturnshow}
        size="lg"
        id={saturnmenu.Modal}
        onHide={saturnClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={saturnmenu.Modal_Header}>
          <Modal.Title className={saturnmenu.Modal_Title}> 프로젝트 3 (포트폴리오)</Modal.Title>
        </Modal.Header>
        <Modal.Body className={saturnmenu.Modal_Body}>
        <Carousel id={saturnmenu.Carousel}>
      <Carousel.Item>
      <Container id={saturnmenu.firstpage}>
                <Row className={saturnmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={saturnmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'}>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/firstpage1.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/firstpage2.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contenttext}>
                    포트폴리오의 시작 화면입니다. 태양계를 모티브로 제작하였고 각각의 행성에 콘텐츠를 넣는 형식으로 제작하였습니다. 배경은 별이 반짝이는 애니메이션을 넣었고 더 보기 버튼을 클릭 시
                    애니메이션과 함께 나머지 두 행성이 표시되도록 제작하였습니다.
                  </Col>
                </Row>
                <Row className={saturnmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={saturnmenu.contenttext}>
                    각각의 행성에 커서를 대면 행성의 크기가 살짝 커지며 행성의 콘텐츠를 간략하게 tooltip으로 표현하였습니다. 모바일에서는 커서가 없기 때문에 메뉴 아이콘을 태양 위에 표시함으로써
                    태양에 메뉴라는 가이드 역할을 주었습니다. 태양을 클릭 시 offcanvas가 실행되면서 메뉴가 튀어나오며 각각의 메뉴를 클릭 시 행성의 창이 열리게 됩니다.
                  </Col>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={false} controls={false} pause={'hover'} >
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/tooltip.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/mobilefirstpage.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/menubar.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                </Row>
              </Container>
      </Carousel.Item>
        
      <Carousel.Item>
      <Container id={saturnmenu.firstpage}>
                <Row className={saturnmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={saturnmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'}>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/aboutme1.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/aboutme2.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contenttext}>
                    수성에 위치한 첫 번째 콘텐츠인 aboutme입니다. 간단한 인사말과 기본정보를 간략하게 적어놓았습니다.
                  </Col>
                </Row>
                <Row className={saturnmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={saturnmenu.contenttext}>
                    금성에서는 제 학력과 대외활동을 타임라인으로 표현하였습니다.
                  </Col>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={false} controls={false} pause={'hover'} >
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/education1.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/education2.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                </Row>
              </Container>
      </Carousel.Item>

      <Carousel.Item>
      <Container id={saturnmenu.firstpage}>
                <Row className={saturnmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={saturnmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'}>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/skills1.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/skills2.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/skills3.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contenttext}>
                    지구에는 제가 쓸 수 있는 언어들과 스킬들을 프론트엔드, 백엔드 등 카테고리에 맞춰서 색깔별로 정리했습니다. 더 많이 써봤던 스킬들의 퍼센트를 높여서 표현하였습니다.
                  </Col>
                </Row>
                <Row className={saturnmenu.contentsRow}>
                <Col xs={12} md={6} lg={6} className={saturnmenu.contenttext}>
                    화성에서 천왕성까지는 모두 프로젝트들입니다. 제가 진행했던 프로젝트들을 정리해서 적어놨으며, 사진들과 설명, 쓰였던 기술과 배운 점을 같이 적었습니다. 사진들의 크기와 기기의 스크린 크기에 맞춰서 콘텐츠의 비율이 조금씩 달라지게 제작되었습니다.

                  </Col>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={false} controls={false} pause={'hover'} >
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/mars1.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/mars2.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/mars3.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/jupiter1.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/jupiter2.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/jupiter3.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                </Row>
              </Container>
      </Carousel.Item>

      <Carousel.Item>
            <Container id={saturnmenu.firstpage}>
                <Row className={saturnmenu.contentsRow}>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contentimageCol}>
                  <Carousel fade interval={5000} touch={true} controls={false} pause={'hover'} variant="dark">
                    <Carousel.Item>
                      <img
                        id={saturnmenu.contentimage}
                        src="./Portfolio/contact.png"
                        className='img-thumbnail'
                        alt='...'
                        loading="lazy"
                      />
                    </Carousel.Item>
                  </Carousel>
                  </Col>
                  <Col xs={12} md={6} lg={6} className={saturnmenu.contenttext}>
                    마지막으로 contactme입니다. 간략하게 네 개의 아이콘으로 구성되어 각각의 아이콘을 클릭하게 되면 해당 사이트로 이동합니다.
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Row className={saturnmenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={saturnmenu.contentimageCol} >
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={saturnmenu.contentimage_icon} 
                  alt=""
                  loading="lazy"/>
                    <span className={saturnmenu.span}><b>기타 설명</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={saturnmenu.contenttext}>
                  기존의 웹사이트의 틀을 벗어나 신선하고 재미있는 웹사이트를 제작하고 싶었습니다. 개인적으로 좋아하는 태양계를 이용해서 우주를 테마로 여러 애니메이션을 이용하고 대중적인 페이지 이동이 아닌
                  팝업창으로 콘텐츠를 표현하였습니다. 모바일과 태블릿에서도 정상적으로 보일 수 있도록 반응형 웹사이트로 제작되었습니다.
                </Col>
              </Row>
              <Row className={saturnmenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={saturnmenu.contentimageCol}>
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={saturnmenu.contentimage_icon} 
                  alt=""
                  loading="lazy"/>
                    <span className={saturnmenu.span}><b>사용된 기술</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={saturnmenu.contenttext}>
                <Badge pill bg="primary">
                  React
                </Badge>{' '}
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
                  SCSS
                </Badge>{' '}
                <Badge pill bg="light" text="dark">
                  netlify
                </Badge>{''}
                </Col>
              </Row>
              <Row className={saturnmenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={saturnmenu.contentimageCol} >
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={saturnmenu.contentimage_icon} 
                  alt=""
                  loading="lazy"/>
                    <span className={saturnmenu.span}><b>사이트</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={saturnmenu.contenttext}>
                  jaehyeon-portfolio.netlify.app/
                </Col>
              </Row>
              <Row className={saturnmenu.contentsRow}>
                <Col xs={5} md={4} lg={4} className={saturnmenu.contentimageCol} >
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={saturnmenu.contentimage_icon} 
                  alt=""
                  loading="lazy"/>
                    <span className={saturnmenu.span}><b>깃헙</b></span>
                  </Col>
                <Col xs={7} md={8} lg={8} className={saturnmenu.contenttext}>
                  github.com/wodntak/Portfolio
                </Col> 
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className={saturnmenu.contentsRow}>
                <Col xs={4} md={4} lg={4} className={saturnmenu.contentimageCol}>
                  <img 
                  src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/unchecked-circle.png" 
                  className={saturnmenu.contentimage_icon} 
                  alt=""
                  loading="lazy"/>
                    <span className={saturnmenu.span}><b>배운점</b></span>
                  </Col>
                <Col xs={8} md={8} lg={8} className={saturnmenu.contenttext}>
                  기존의 웹사이트의 틀을 벗어나 독창적인 웹사이트를 만들기 위해 웹사이트를 어떻게 디자인하느냐에 많이 고민했습니다. 한 화면에 행성들이 들어가지 않아 페이지 이동이 아닌 한 페이지에서 로직을 이용해
                  기존의 행성들이 사라지고 새로운 행성들이 나타나도록 표현하였으며, 모바일과 태블릿에는 커서가 없는 문제를 해결하기 위해 모바일과 태블릿에서만 보이는 아이콘과 설명이 들어갔습니다. 많은 애니메이션과
                  사진들, 아이콘 등을 사용하고 반응형 웹사이트로 만드는 과정에서 CSS에 대해서 많이 배우는 계기가 되었으며, 리액트로 처음 제작해본 웹사이트의 의미도 컸습니다.
                </Col>
              </Row>
            </Carousel.Item>
    </Carousel>
        </Modal.Body>
      </Modal>
       
        </>
    );
   
            
      
};

export default Saturn;
















