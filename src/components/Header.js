import React from 'react'
import Typed from 'react-typed'

import logo from '../logo.png'
import contract1 from '../contract_1.PNG'
import etherscan1 from '../etherscan_1.PNG'
import wire1 from '../wire1.PNG'
import pyExcel from '../pyExcel.PNG'
function Header() {
  return (
    <div>
      <div className='header-wrapper '>
        <div className='main-info '>
          <div>

            {/* <div className='container'> */}
            <br></br>
            <br></br>
            <br></br>
            <div class="banner-section">

              <div className='banner-bg'>

                <div class="row">

                  <div class="col-sm-6">

                    {/* <div className='HeaderTask'> */}
                    <div class="banner-text">
                    <Typed className='typed-home'
                        strings={["Hi I'm Beem"]}
                        typeSpeed={120}
                        backSpeed={50}
                        loop
                        />    
                    
                      <a className="anchor" id="about"></a>
                      <div className="followWrap">
                      <br/>
                        <div className="followMeBar fixed">
                          <h1><b>About me</b></h1>
                        </div>

                      </div>
                      <p >Email: beem25301@gmail.co</p>
                      <p >Email: beem25301@gmail.co</p>
                      <p >Email: beem25301@gmail.co</p>
                      <p >Email: beem25301@gmail.co</p>
                      <p >Email: beem25301@gmail.co</p>
                      <p >Email: beem25301@gmail.co</p>
                      <p >Email: beem25301@gmail.co</p>
                      <p >Email: beem25301@gmail.co</p>
                      <p>GitHub : <a href="https://github.com/beem10101" target="_blank">beem10101</a></p>
                      {/* <p>LinkedIn : <a href="https://www.linkedin.com/in/kriskanin/" target="_blank">Kriskanin Hengniran</a></p> */}
                      <div className="followMeBar fixed">
                        <h1><b>Education</b></h1>
                        <div>
                          <ul >
                            <p >2017 - present :
                              {/* <strong>high school</strong> */}
                              <strong className='textFont'> thammasat klongluang wittayakom</strong> (pathumthani, Thailand)
                            </p>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  <div class="col-md-6">
                    <img className="banner-img" atl="banner img" src={logo} width="180" height="180" data-was-processed="true" ></img>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    <p >ssssssssssssssssssssssssssssss</p>
                    <p>ssssssssssssssssssssssssssssss</p>
                    <p>ssssssssssssssssssssssssssssss</p>
                    <p>ssssssssssssssssssssssssssssss</p>
                    <p>ssssssssssssssssssssssssssssss</p>
                    <p>ssssssssssssssssssssssssssssss</p>



                  </div>

                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>


    // </div>

  )
}
export default Header