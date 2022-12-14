import React from 'react';
import uranusmenu from './MenuStyle/Uranus_menu.module.scss';
import uranusani from './AnimationStyle/Uranus_animation.module.scss';

const uranus = ({checked}) => {
    return (
        <>
        <div id= {checked ? uranusani.uranus_animode : uranusmenu.uranus_menumode}></div>
        </>
    );
};

export default uranus;