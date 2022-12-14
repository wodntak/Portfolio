import React from 'react';
import saturnmenu from './MenuStyle/Saturn_menu.module.scss';
import saturnani from './AnimationStyle/Saturn_animation.module.scss';

const saturn = ({checked}) => {
    return (
        <>
            {checked ? <div id={saturnani.saturn_animode}/>   :
    <div id={saturnmenu.saturn_menumode}> <div id={saturnmenu.saturn_bottom}/> <div id={saturnmenu.saturn_ring}/> 
    <div id={saturnmenu.saturn_top}/></div>}
        </>
    );
};

export default saturn;
















