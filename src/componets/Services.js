    import React from 'react'
    import './Services.css'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCogs, faLeaf } from '@fortawesome/free-solid-svg-icons'
    import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

    function Services() {
    return (
    <>
    <div className='section-padding services'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-header text-center">
                        <h2>Our Services</h2>
                        <p>What we Offer You</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="single-service">
                        <span className='icon'>
                            <FontAwesomeIcon className='i' icon={faCogs} />
                        </span>
                        <div className="content">
                            <h3 className='title'>Web Design</h3>
                            <div style={{transform:'translateY(-95px)', width:'100%',alignItems:'center'}}>                            <p>Web Development</p>
                            <p>E-Commerce Development
</p>


                            <p>SEO Services
</p>
                            <p>Website Maintenance
</p></div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="single-service">
                        <span className='icon'>
                            <FontAwesomeIcon icon={faAppStoreIos} /> 
                        </span>
                        <div className="content">
                            <h3 className='title'>App Design</h3>
                            <div style={{transform:'translateY(-90px)', width:'100%',alignItems:'center'}}> <p>Overview</p>
                            <p>Design</p>

<p>Design Process</p>
<p>Testing</p>

<p>Final Design</p></div>
                    
                            
                                   </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="single-service">
                        <span className='icon'>
                            <FontAwesomeIcon icon={faLeaf} />
                        </span>
                        <div className="content">
                            <h3 className='title'>Marketing</h3>
                            <div style={{transform:'translateY(-90px)'}}> <p>Overview</p>
                            <p >Research and Analysis</p>

<p>Marketing Strategy:</p>
<p>Result</p>

</div>
                                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
    }

    export default Services
