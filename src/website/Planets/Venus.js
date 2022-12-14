import React from 'react';
import venusmenu from './MenuStyle/Venus_menu.module.scss'
import venusani from './AnimationStyle/Venus_animation.module.scss';

const Venus = ({checked}) => {
    return (
        <>
            <div id= {checked ? venusani.venus_animode : venusmenu.venus_menumode}></div>
        </>
    );
};

export default Venus;