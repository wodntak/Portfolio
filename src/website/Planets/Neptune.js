import React from 'react';
import neptunemenu from './MenuStyle/Neptune_menu.module.scss';
import neptuneani from './AnimationStyle/Neptune_animation.module.scss';

const neptune = ({checked}) => {
    return (
        <>
        <div id= {checked ? neptuneani.neptune_animode : neptunemenu.neptune_menumode}></div>
        </>
    );
};

export default neptune;