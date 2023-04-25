import React from 'react';
import './Home.css';
import { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import {FaHandSparkles,faHandWave} from'react-icons/fa';
import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Protfolio from './Protfolio';
import ContactForm from './Contact';

export default function Home({ title }) {
  const [name, setName] = useState('  Robin Singh  ');

  return (
    <>    <div className="container containers d-flex justify-content-center">
      <div className="row " >
        <div className="col-2 socialIcons d-flex align-items-center ">
          <ul>
            <li>
              <AiOutlineLinkedin />
            </li>
            <li>
              <AiOutlineFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>
        <div className="col-5 socialText d-flex flex-column align-items-center ">
          <h2><faHandWave/>{name}</h2>
          <h4>-Software Developer</h4>
          <p>
          As an Indian-based creative designer, I am passionate and dedicated to delivering top-quality work. 
          </p>
        </div>
        <div className="col-5 hero-img ma d-flex align-items-center">
          {/* add content here */}

        </div>
      </div>
    </div>
<br/>
    

    </>
  );
}
