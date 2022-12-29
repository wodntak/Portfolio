import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import earthmenu from './MenuStyle/Earth_menu.module.scss';
import earthani from './AnimationStyle/Earth_animation.module.scss';
import { CarouselItem } from 'react-bootstrap';



const Earth = ({checked, earthshow, earthClose, earthShow}) => {
    
    const renderTooltip = (props) => (
        <Tooltip id={earthmenu.Tooltip} {...props}>
          Skills
          <p className={earthmenu.p}> 제가 다룰 수 있는 스킬들을 적어놨어요!</p>
        </Tooltip>
    );
    

    return (
        <>
        <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
            {checked ? <div id={earthani.earth_animode}/> : <div id={earthmenu.earth_menumode} onClick={earthShow}/>}
        </OverlayTrigger>

        <Modal
        show={earthshow}
        size="lg"
        id={earthmenu.Modal}
        onHide={earthClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header  closeButton closeVariant="white" className={earthmenu.Modal_Header}>
          <Modal.Title className={earthmenu.Modal_Title}>Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body className={earthmenu.Modal_Body}>

      <Carousel id={earthmenu.Carousel} interval={null}>
      <Carousel.Item>
        <Container>
          <h3> Frontend </h3>

          <Row id={earthmenu.Row}>
            <Col>
              <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="35" height="35" alt="HTML"/>
              <span className={earthmenu.span}> HTML </span>
              <ProgressBar className={earthmenu.progress} animated now={90} />
            </Col>

            <Col>
            <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="35" height="35" alt="CSS"/>
              <span> CSS </span>
              <ProgressBar className={earthmenu.progress} animated now={90} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="35" height="35" alt="Javascript" />
                <span> Javascript </span>
              <ProgressBar className={earthmenu.progress} animated now={85} />
            </Col>

            <Col>
              <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="35" height="35" alt="Sass"/>
              <span> Sass </span>
              <ProgressBar className={earthmenu.progress} animated now={80} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
              <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="35" height="35" alt="React"/>
              <span> React </span>
              <ProgressBar className={earthmenu.progress} animated now={65} />
            </Col>

            <Col>
              <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="35" height="35" alt="Bootstrap" />
              <span> Bootstrap </span>
              <ProgressBar className={earthmenu.progress} animated now={90} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
              <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="35" height="35" alt="Redux"/>
              <span> Redux </span>
              <ProgressBar className={earthmenu.progress} animated now={25} />
            </Col>

            <Col>
            </Col>
           
          </Row>
        </Container>
       
      </Carousel.Item>

      <Carousel.Item>
      <Container>
          <h3> Backend </h3>

          <Row id={earthmenu.Row}>
            <Col>          
              <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="45" height="45" alt="PHP"/>
              <span className={earthmenu.span}> PHP </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={75} />
            </Col>

            <Col>
            <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" width="45" height="45" alt="Java"/>
              <span> Java </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={90} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width="35" height="35" alt="C#" />
                <span> C# </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={75} />
            </Col>

            <Col>
              <img className={earthmenu.icon}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="35" height="35" alt="MySQL"/>
              <span> MySQL </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={85} />
            </Col>
          </Row>

          <h3> Version Control </h3>
          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" width="35" height="35" alt="Git" />
                <span> Git </span>
              <ProgressBar variant="info" className={earthmenu.progress} animated now={75} />
            </Col>

            <Col>
              <img className={earthmenu.icon}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="35" height="35" alt="Github"/>
              <span> Github </span>
              <ProgressBar variant="info" className={earthmenu.progress} animated now={85} />
            </Col>
          </Row>
           
          
        </Container>
      </Carousel.Item>

      <CarouselItem>

      </CarouselItem>

    </Carousel>
        </Modal.Body>
      </Modal>
       
        </>
    );
};

export default Earth;