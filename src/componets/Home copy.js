import React from 'react'
import { useState } from "react";


import {BsInstagram,BsAward} from "react-icons/bs";
import { BiSupport,BiShoppingBag } from "react-icons/bi";
import {AiOutlineLinkedin,AiOutlineFacebook} from "react-icons/ai"

export default function Home({title}) {
    const [Name, setName] = useState(" Enter your name");
    let name="Mohammd Ubaid Mohiuddin";


  return (
    <>
    
    <div className = "container">
        <div className="row">
            <div className="col socialIcons ">
                <ul>
                    <li><AiOutlineLinkedin/></li>
                    <li><AiOutlineFacebook/></li>
                    <li><BsInstagram/></li>
                </ul>
            </div>
            <div className="col socialIcons ">
                
                <h2>{title}  <AiOutlineFacebook/></h2>
                <h4>-Web Developer</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste iusto quae. Nemo alias iste dolorem ad quam explicabo dolores sequi, quisquam illo deleniti sit! Amet animi quae hic modi.</p>
                
            </div>

            <div className="col socialIcons ">
            <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input
      type="text"
      value={Name}
      onChange={(event)=>setName(event.target.value)}
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="  nn"
    />
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Mobile Number</label>
    <input
      type="tell"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Mobile Number"
    />
   
  </div><div className="form-group">
    <label htmlFor="exampleInputEmail1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

   
  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

            </div>

        </div>

    </div>
    </>
  )
}
