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
import { CarouselItem } from 'react-bootstrap';



const Earth = ({ earthshow, earthClose, earthShow, pagenumber}) => {
    
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
        <div id={earthmenu.earth_menumode} onClick={earthShow} pagenumber={pagenumber}/>
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
          <h3 id={earthmenu.h3_frontend}> Frontend </h3>

          <Row id={earthmenu.Row}>
            <Col>
              <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/>
              <span className={earthmenu.span}> HTML </span>
              <ProgressBar className={earthmenu.progress} animated now={90} />
            </Col>

            <Col>
            <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  alt="CSS"/>
              <span> CSS </span>
              <ProgressBar className={earthmenu.progress} animated now={90} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" />
                <span> Javascript </span>
              <ProgressBar className={earthmenu.progress} animated now={85} />
            </Col>

            <Col>
              <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"  alt="Sass"/>
              <span> Sass </span>
              <ProgressBar className={earthmenu.progress} animated now={80} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
              <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  alt="React"/>
              <span> React </span>
              <ProgressBar className={earthmenu.progress} animated now={65} />
            </Col>

            <Col>
              <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
              <span> Bootstrap </span>
              <ProgressBar className={earthmenu.progress} animated now={90} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
              <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"  alt="Redux"/>
              <span> Redux </span>
              <ProgressBar className={earthmenu.progress} animated now={10} />
            </Col>

            <Col>
            </Col>
           
          </Row>
        </Container>
       
      </Carousel.Item>

      <Carousel.Item>
      <Container>
          <h3 id={earthmenu.h3_backend}> Backend </h3>

          <Row id={earthmenu.Row}>
            <Col>          
              <img className={earthmenu.icon2} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"/>
              <span className={earthmenu.span}> PHP </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={70} />
            </Col>

            <Col>
            <img className={earthmenu.icon2} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java"/>
              <span> Java </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={90} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                <span> C# </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={65} />
            </Col>

            <Col>
              <img className={earthmenu.icon1}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL"/>
              <span> MySQL </span>
              <ProgressBar variant="success" className={earthmenu.progress} animated now={85} />
            </Col>
          </Row>

          <h3 id={earthmenu.h3_version}> Version Control </h3>
          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon1} src="https://img.icons8.com/color/48/null/git.png" alt="Git" />
                <span> Git </span>
              <ProgressBar variant="info" className={earthmenu.progress} animated now={70} />
            </Col>

            <Col>
              <img className={earthmenu.icon1}  src="https://img.icons8.com/color-glass/48/null/github--v1.png" alt="Github"/>
              <span> Github </span>
              <ProgressBar variant="info" className={earthmenu.progress} animated now={85} />
            </Col>
          </Row>
           
          
        </Container>
      </Carousel.Item>

      <CarouselItem>
      <Container>
          <h3 id={earthmenu.h3_comm}> Communication </h3>
          <Row id={earthmenu.Row}>
            <Col>          
              <img className={earthmenu.icon2} src="https://img.icons8.com/doodle/48/null/notion.png"  alt="Notion"/>
              <span className={earthmenu.span}> Notion </span>
              <ProgressBar variant="warning" className={earthmenu.progress} animated now={77} />
            </Col>

            <Col>
            <img className={earthmenu.icon2} src="https://img.icons8.com/color/48/null/slack-new.png"  alt="Slack"/>
              <span> Slack </span>
              <ProgressBar variant="warning" className={earthmenu.progress} animated now={80} />
            </Col>
          </Row>

          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon2} src="https://img.icons8.com/fluency/48/null/evernote.png"  alt="Evernote" />
                <span>Evernote</span>
              <ProgressBar variant="warning" className={earthmenu.progress} animated now={70} />
            </Col>

            <Col>
            </Col>
          </Row>

          <h3 id={earthmenu.h3_webhosting}> Web Hosting </h3>
          <Row id={earthmenu.Row}>
            <Col>
            <img className={earthmenu.icon1} src="https://img.icons8.com/color-glass/48/null/github--v1.png" alt="Github.io" />
                <span> Github.io </span>
              <ProgressBar variant="danger" className={earthmenu.progress} animated now={90} />
            </Col>

            <Col>
              <img className={earthmenu.icon1}  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" alt="Netlify"/>
              <span> Netlify </span>
              <ProgressBar variant="danger" className={earthmenu.progress} animated now={75} />
            </Col>
          </Row>
           
          
        </Container>
      </CarouselItem>

    </Carousel>
        </Modal.Body>
      </Modal>
       
        </>
    );
};

export default Earth;