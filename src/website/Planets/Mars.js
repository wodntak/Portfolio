import React from 'react';
import marsmenu from './MenuStyle/Mars_menu.module.scss';
import marsani from './AnimationStyle/Mars_animation.module.scss';

const Mars = ({checked}) => {
    return (
        <>
        <div id= {checked ? marsani.mars_animode : marsmenu.mars_menumode}></div>
        </>
    );
};

export default Mars;