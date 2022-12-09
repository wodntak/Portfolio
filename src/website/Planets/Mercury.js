import React from 'react';
import mercurymenu from './Mercury_menu.module.scss';
import mercuryani from './Mercury_animation.module.scss';

const Mercury = ({checked}) => {
    return (
        <>
            <div id= {checked ? mercuryani.mercury_animode : mercurymenu.mercury_menumode}></div>
        </>
    );
};

export default Mercury;