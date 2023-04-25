import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'
import {BsInstagram,BsAward} from "react-icons/bs";
import { BiSupport,BiShoppingBag } from "react-icons/bi";
import { FaFileAlt } from 'react-icons/fa';

function About() {

  function handleDownloadClick() {
    const url = 'https://drive.google.com/file/d/1jsSxxrlmbDYn8L9hBf12GIut-iyv_qN3/view?usp=share_link'; // Replace with your PDF URL
    const link = document.createElement('a');
    link.href = url;
//    link.target = '_blank'; // Open in a new tab/window
link.download = 'Resume.pdf'; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Container>

      <br/>
      <br/>
      
      <h1 className='text-center about-me gradient-text outline-text'>About Me</h1>
      <h6 className='text-center'>My Introduction</h6>
      <br />
      
      <Row>
        <Col xs={12} md={6}>
            <img className='imgs' src="https://lh3.googleusercontent.com/XhsmsfIqAKJ0I0YRgMtchllNt2DCj9J0tK79fP_MuEbSJvXxXMUePalApOxU41NZgIkRvGtzfR_YSWja10KZI-uJ1rdg_Hse8On8qTD8nUwn_LZfrcev5carkocAk3WIr1N19QkDDjQ0hrBasNdI2Ux4yS_sTtOfrFF4GFdZtxHB75qW0wSAlHEFSSWyqa5hSaCI59TXx1ZjlLSIp3e7_pA00llmQQQR17GjcB3e5iGNetqg0GVShg5vTyuynFoyLObBjPt2jv4EqoNlVeMY8p-0Zcgq1MmzNWWfxMn0hCDoHz-8iP8D_xTrtq-mz_V7F-pUufDQhM7GIbEE_xc0l5CHhiPg7h4-4lSprLv88jyG9pmPZ_qVfDjNi0dPoJPEbipxbhVub_zaNjeMrL7b1YzvFFHgxSD0VfNEdGkhLSz0MXLaD4t8ofYz5aOfW3wXZEKUBpVAUZPN1ABDHIdHIB3WyY-NydFByNcvop17BheHERRo7D6bHO2RMLK8VYdTcn3J26zPGFY5SIL5NdRNwEnvojVfddVdHP_EIrSSRqlFaT7dPJg5fVuRuJfSC7G3SKoDImK7I0a3S8ZK2ww_eLo8npw1_iOdbO9zTClVxWVFJqC4bxDN8W0_VMN7vPevCkumoON88cKPK6Sfi_ZItCjAKu8wbr4f6ov0jSnukC0nxaWTpy2zzk-P7U0ou1xr8VqP1N-Wm-TTSwNogi7gE7ZaQU-fCzKqXk6i5Vz2Cl3fhsfAhqnb6LaFN4rp_CZSMWxsoU_fX53YNzS7i5iyMf3Oyg3ECEzz58bhW6Yy8EKRNIpta34i3qIj5h3Fkcz_ThDv_qPgrYQjqqxQc3xgWsO73sRq2zYQK2ktEx8ZIT3HZ3wTG66PBAC0kHQqNLPU94Vnynpx2u7Cym5RE4TnQbrxWekuRtC1vm_gg0KhFTluOA=w528-h854-s-no?authuser=0" alt="" />
        </Col>
        <Col xs={12} md={6}>

          <Row xs={12} sm={4}>
           
         
            <Col xs={12} sm={4} className="boxColor">
              <div className="box bos ">
<BsAward className='icon-xl'/>
                <h5 className='mainText'>Experience</h5>
                <p className='text'>1+ year's</p>
              </div>
            </Col>
            <Col xs={12} sm={4} className="boxColor ">
              <div className="box bos ">
<BiShoppingBag  className='icon-xl'/>
                <h5 className='mainText'>Completed</h5>
                <p className='text'>10+ Projects</p>
              </div>
            </Col>
            <Col xs={12} sm={4} className="boxColor">
              <div className="box bos">
<BiSupport  className='icon-xl'/>
                <h5 className='mainText'>Support</h5>
                <p className='text'>Online 24*7</p>
              </div>
            </Col>
           
            

           
          </Row>
          <Col>
          <p className='fontTyp'> As a frontend and backend developer with years of experience, I specialize in creating web pages with exceptional UI/UX design. Throughout my career, I have successfully completed numerous projects for a variety of clients, and I take pride in delivering high-quality work that meets their needs and exceeds their expectations.</p>  
            </Col>
          <Col>
            <button type="button"  onClick={handleDownloadClick} class="btn btn-lg btn-dark custom-btn ">Download CV    <FaFileAlt size={32} className="en"/> </button>

            </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
