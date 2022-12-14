import React from 'react';
import earthmenu from './MenuStyle/Earth_menu.module.scss';
import earthani from './AnimationStyle/Earth_animation.module.scss';

const Earth = ({checked}) => {
    return (
        <>
        <div id= {checked ? earthani.earth_animode : earthmenu.earth_menumode}></div>
        </>
    );
};

export default Earth;