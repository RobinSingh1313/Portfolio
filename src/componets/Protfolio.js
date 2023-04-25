import React, { useRef, useEffect } from 'react';
import './protfolio.css'
function Protfolio() {
    const tabsRef = useRef([]);
    const tabContentsRef = useRef([]);
  
    useEffect(() => {
      tabsRef.current.forEach((tab,index) => {
        tab.addEventListener('click', () => {
          const target = document.querySelector(tab.dataset.target);
          tabContentsRef.current.forEach((tabContent) => {
            tabContent.classList.remove('qualification_active');
          });
          target.classList.add('qualification_active');
          tabsRef.current.forEach((tab) => {
            tab.classList.remove('qualification_active');
          });
          tab.classList.add('qualification_active');
        });
        if (index === 0) {
            tab.classList.add('qualification_active');
          }
      });

      if (tabContentsRef.current.length > 0) {
        tabContentsRef.current[0].classList.add('qualification_active');
      }
  
    }, []);
  
    return (
      <>
        <section className="qualification section">
          <h2 className="section_title "> Qualification</h2>


          <h6 style={{textAlign:'center'}}>My Personal Journey</h6>
  
          <div className="qualification_container container">
            <div className="qualification_tabs">
              <div
                ref={(el) => tabsRef.current.push(el)}
                className="qualification_button button--flex qualification-active"
                data-target="#education"
              >
                <i className="uil uil-graduation-cap qualification_icon"></i>
                Education
              </div>
  
              <div
                ref={(el) => tabsRef.current.push(el)}
                className="qualification_button button--flex "
                data-target="#work"
              >
                <i className="uil uil-briefcase-alt qualification_icon"></i>
                Work
              </div>
            </div>
  
            <div className="qualification__sections">
              <div
                ref={(el) => tabContentsRef.current.push(el)}
                className="qualification__content qualification_active"
                data-content
                id="education"
              >
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title"> Artifical Intelligence  & Machine Learning</h3>
                            <span className="qualification_subtitle">SRM University</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                            2021-2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>



                    <div className="qualification_data">

                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title"> Computer Engineering</h3>
                            <span className="qualification_subtitle">Kg Reddy</span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                            2019-2021
                            </div>
                        </div>
                       
                    </div>
           </div>

                <div className="qualification__content" data-content id='work'>


    <div className="qualification_data">
        <div>
            <h3 className="qualification_title"> Software Engineering</h3>
            <span className="qualification_subtitle">FreeLancer</span>
            <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i>
            2021-2023
            </div>
        </div>
        <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
        </div>
    </div>



    <div className="qualification_data">

        <div></div>
        <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
        </div>
        <div>
            <h3 className="qualification_title"> Android Developer </h3>
            <span className="qualification_subtitle">InternShip</span>
            <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i>
            2021-2022
            </div>
        </div>
       
    </div>
    <div className="qualification_data">
        <div>
            <h3 className="qualification_title"> BackEnd Developer</h3>
            <span className="qualification_subtitle">FreeLancer</span>
            <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i>
            2020-2021
            </div>
        </div>
        <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
        </div>
    </div>



    <div className="qualification_data">

        <div></div>
        <div>
            <span className="qualification_rounder"></span>
            <span className="qualification_line"></span>
        </div>
        <div>
            <h3 className="qualification_title"> UI Designer</h3>
            <span className="qualification_subtitle">FreeLancer</span>
            <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i>
            2019-2020
            </div>
        </div>
       
    </div>
</div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Protfolio