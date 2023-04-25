import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsInstagram, BsAward } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiSupport, BiShoppingBag } from 'react-icons/bi';
import { FaFileAlt } from 'react-icons/fa';

import './Skills.css';

function Skills() {
  return (
    <>
      <h2 className='text-center'>Skills</h2>
      <h6 className='text-center'>My technical Skills</h6>

      <Row xs={12} sm={4} className='text-center justify-content-center'>
        <Col xs={12} sm={4}>
          <div className='box skill-box'>
            <h5>FrontEnd Development</h5>
            <Row>
              <Col>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    HTML
                  </h5>
                  <p>Beginner</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    CSS
                  </h5>
                  <p>Intermediate</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    JavaScript
                  </h5>
                  <p>Intermediate</p>
                </Row>
              </Col>

              <Col>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    BootStrap
                  </h5>
                  <p>Advanced</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    React
                  </h5>
                  <p>Intermediate</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    Git
                  </h5>
                  <p>Beginner</p>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={12} sm={4}>
          <div className='box skill-box'>
            <h5>BackEnd Development</h5>
            <Row>
              <Col>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    Java
                  </h5>
                  <p>Intermediate</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    NodeJs
                  </h5>
                  <p>Beginner</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    Spring
                  </h5>
                  <p>Beginner</p>
                </Row>
              </Col>

              <Col>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    MySQL
                  </h5>
                  <p>Intermediate</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    Flutter
                  </h5>
                  <p>Intermediate</p>
                </Row>
                <Row>
                  <h5>
                    <AiFillCheckCircle className='m-1' />
                    MongoDB
                  </h5>
                  <p>Intermediate</p>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Skills;
