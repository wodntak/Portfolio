import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import background from './Home.module.scss';
import Neptune from './Planets/Neptune';
import Uranus from './Planets/Uranus';

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



const SecondHome = () => {
  const navigate = useNavigate();

    const [checked, setChecked] = useState(false);

    const [uranusshow, setUranus] = useState(false);
    const [neptuneshow, setNeptune] = useState(false);

    const uranusClose = () => setUranus(false);
    const neptuneClose = () => setNeptune(false);

    const uranusShow = () => setUranus(true);
    const neptuneShow = () => setNeptune(true);


    return (
    <>
      <div id={background.star1}></div>
      <div id={background.star2}></div>
      <div id={background.star3}></div>
      <div id={background.star4}></div>
        <Uranus checked={checked} uranusshow={uranusshow} uranusClose={uranusClose} uranusShow={uranusShow}/>
        <Neptune checked={checked} neptuneshow={neptuneshow} neptuneClose={neptuneClose} neptuneShow={neptuneShow}/>
        
      <Form>
        <Form.Check 
        type="switch"
        id="custom-switch"
        className={background.switch}
        checked={checked}
        label={checked ? "애니메이션 모드 (미완성)" : "메뉴 모드"}
        onChange={(e) => setChecked(e.currentTarget.checked)} 
      />
        
      </Form>
        <button
        onClick={() => navigate(-1)}>
        click me
        </button>
        {/* <Routes>
          <Route path="/SecondHome" element={<SecondHome/>} />
        </Routes> */}
    </>

    );
};

export default SecondHome;