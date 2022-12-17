import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Carousel from 'react-bootstrap/Carousel';
import mercurymenu from './MenuStyle/Mercury_menu.module.scss';
import mercuryani from './AnimationStyle/Mercury_animation.module.scss';

const Mercury = ({checked}) => {

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
            {checked ? <div id={mercuryani.mercury_animode}/> : <div id={mercurymenu.mercury_menumode} onClick={}/>}
        </OverlayTrigger>
        </>
    );
};

export default Mercury;