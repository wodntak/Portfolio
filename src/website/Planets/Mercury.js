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


const Mercury = ({checked, mercuryshow, mercuryClose, mercuryShow}) => {


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
            {checked ? <div id={mercuryani.mercury_animode}/> : <div id={mercurymenu.mercury_menumode} onClick={mercuryShow}/>}
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
        <Carousel id={mercurymenu.Carousel}>
      <Carousel.Item>
        <Container>
        <h3>반갑습니다, 프론트엔드 개발자를 꿈꾸는 <b>양재현</b>입니다.</h3>
        {/* <p>Greetings, I am <b>Jaehyeon Yang</b>,who dreams of being a front-end developer.</p> */}
        <Row style={{marginTop:"45px"}}>
            <Col >
                <h4>'일을 시작했다면 끝을 보라'</h4> <h5> 주어진일은 끝까지 포기하지 않고 끝까지 해내는 개발자가 되고 싶습니다.
                    
                    좌우명, 왜 이것을 선택했는지, 살아온 배경 말레이시아에서 미국 유학하고 </h5>
            </Col>
            <Col>
                <h5> Wherever</h5>
            </Col>
        </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
      <Row>
        <Col id={mercurymenu.aboutMesecond}>
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
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft}>
                <svg className={mercurymenu.icon} width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 9v-1.974h2v1.974h5v-4h2v4h5v-2h2v2h.755c1.803.091 3.243 1.646 3.243 3.519 0 .961-.382 1.829-.998 2.458v9.023h-22v-9.02c-.43-.438-.747-.993-.9-1.621-.067-.276-.1-.558-.1-.841 0-2.009 1.629-3.479 3.242-3.518h.758zm17 11h-18v2h18v-2zm-18-4.027v2.027h18v-2.027l-.407.025c-.775 0-1.541-.27-2.154-.79-.576.488-1.333.789-2.155.789-.812 0-1.566-.295-2.142-.779-.581.487-1.341.78-2.136.78-.807 0-1.575-.292-2.149-.78-.586.491-1.346.78-2.137.78-.775 0-1.526-.26-2.16-.79-.561.479-1.328.79-2.154.79l-.406-.025zm.29-4.973c-.627.049-1.243.635-1.288 1.421-.051.887.632 1.585 1.454 1.576 1.176-.014 1.915-.86 2.117-1.997.217.88.986 1.975 2.145 1.996 1.156.021 1.99-.959 2.161-1.958l.008-.038c.199 1.04.99 1.996 2.109 1.996 1.155 0 1.917-.872 2.172-1.996.248 1.138 1.035 1.994 2.117 1.997 1.108.003 1.955-.928 2.203-1.997.188.828.804 1.985 2.051 1.998.759.008 1.46-.65 1.46-1.483 0-.837-.649-1.481-1.318-1.517l-17.391.002zm.863-4.451c-1.897-.621-1.351-3.444.89-4.523.08 1.422 1.957 1.566 1.957 3.002 0 .602-.441 1.274-1.084 1.521.154-.509-.186-1.416-.88-1.809-.702.407-1.063 1.302-.883 1.809zm13.999-.026c-1.896-.621-1.35-3.444.891-4.523.08 1.422 1.957 1.566 1.957 3.002 0 .602-.441 1.274-1.084 1.521.153-.509-.186-1.416-.88-1.809-.702.407-1.063 1.302-.884 1.809zm-6.999-2c-1.897-.621-1.351-3.444.89-4.523.08 1.422 1.957 1.566 1.957 3.002 0 .602-.441 1.274-1.084 1.521.153-.509-.186-1.416-.88-1.809-.702.407-1.063 1.302-.883 1.809z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight}>
                   나이
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row} style={{marginTop:"-15px"}}>
                1996년 {<br></br>} 12월 12일생
            </Row>
        </Col>
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft_three}>
                <svg className={mercurymenu.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight_three}>
                   거주지
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row}>
                서울시 송파구
            </Row>
        </Col>
      </Row>
    </Container>
    <Container style={{marginTop:"5px"}}>
      <Row>
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft}>
                <svg className={mercurymenu.icon} width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M13.403 24h-13.403v-22h3c1.231 0 2.181-1.084 3-2h8c.821.916 1.772 2 3 2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2 2h-3.897l-2.103-2h-4v18h9.866c.397.751.919 1.427 1.537 2zm5.097-11c3.035 0 5.5 2.464 5.5 5.5s-2.465 5.5-5.5 5.5c-3.036 0-5.5-2.464-5.5-5.5s2.464-5.5 5.5-5.5zm0 2c1.931 0 3.5 1.568 3.5 3.5s-1.569 3.5-3.5 3.5c-1.932 0-3.5-1.568-3.5-3.5s1.568-3.5 3.5-3.5zm2.5 4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.385zm6.151 1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823 1.864 1.776 3.136-3.192-.815-.808-2.336 2.384zm8.151 1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0 .552.449 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.551 0-1 .448-1 1z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight}>
                   경력
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row}>
                신입
            </Row>
        </Col>
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft}>
                <svg className={mercurymenu.icon} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight}>
                   취미
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row} >
                풋살, 영화
            </Row>
        </Col>
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft_three}>
                <svg className={mercurymenu.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight_three}>
                   이메일
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row_email}>
                yyasu1212@naver.com
            </Row>
        </Col>
      </Row>
    </Container>
    <Container style={{marginTop:"5px"}}>
      <Row>
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft_three}>
                <svg className={mercurymenu.icon} width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.622.845-2.298 2.627-2.289 4.843.027 6.902 6.711 18.013 12.212 18.117.575.011 1.137-.098 1.677-.345.121-.055 2.102-1.029 2.11-1.033zm4-5.621h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight_three}>
                   연락처
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row}>
                010-4332-5132
            </Row>
        </Col>
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft}>
                <svg className={mercurymenu.icon} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="30" height="30"  xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight}>
                   특기
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row} >
                요리
            </Row>
        </Col>
        <Col id={mercurymenu.aboutMesecond}>
            <Row className={mercurymenu.icon_Row}>
                <Col className={mercurymenu.iconLeft_three}>
                <svg className={mercurymenu.icon} width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z"/></svg>
                </Col>
                <Col className={mercurymenu.iconRight_three}>
                   최종학력
                </Col>
            </Row>
            <Row className={mercurymenu.text_Row_email}>
            University of Nebraska-Lincoln
            </Row>
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