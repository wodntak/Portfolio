import React from 'react';
import jupitermenu from './MenuStyle/Jupiter_menu.module.scss';
import jupiterani from './AnimationStyle/Jupiter_animation.module.scss';

const Jupiter = ({checked}) => {
    return (
        <>
        <div id= {checked ? jupiterani.jupiter_animode : jupitermenu.jupiter_menumode}></div>
        </>
    );
};

export default Jupiter;