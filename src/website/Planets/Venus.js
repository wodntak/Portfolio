import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import venusmenu from './MenuStyle/Venus_menu.module.scss'
import venusani from './AnimationStyle/Venus_animation.module.scss';

const Venus = ({checked}) => {

    const renderTooltip = (props) => (
        <Tooltip id={venusmenu.Tooltip} {...props}>
          Education
          <p className={venusmenu.p}></p>
        </Tooltip>
    );

    return (
        <>
        <OverlayTrigger
        placement="top"
        overlay={renderTooltip}
        >
            <div id= {checked ? venusani.venus_animode : venusmenu.venus_menumode}></div>
        </OverlayTrigger>
        </>
    );
};

export default Venus;