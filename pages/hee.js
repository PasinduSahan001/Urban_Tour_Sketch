
import React from 'react';
import images from 'next/image';
import styles from '../styles/Home.module.css'




const About = () => {
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div className='profile-img'>
                            <img src='/Boyim.png' width={120} height={120} alt="" />
                            </div>
                            
                        </div>
  
                        <div className="col-md-4">
                            <div className="profile-head">
                                <h5>promoda hasan</h5>
                                <h6>Web Developer</h6>
                                <p className="profile-rating mt-3 mb-5">RANKING: <span>1/10</span></p>
                            
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                    </li>
                                    
                                  </ul>
                            
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <input type="submit" className='profile-edit-btn' name='btnAddmore' value="Edit Profile" />
                        </div>
  
                    </div>
  
  
                    <div className='row'>
                        {/* left side url  */}
                        <div className='col-md-4'>
                            <div className="profile-work">
                        <p> Work Link</p>        
  
                            </div>
                        </div>
  
                        {/* right side date toogle*/}
  
                        <div className='col-md-8 pl-5 abbout-info'>
                            <div className='tab-content profile-tab' id='myTabCoontent'>
                                <div className='tab-pane fade show active' id="home" role="tabpanel"aria-labelledby="home-tab">
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>543543535</p>
                                        </div>
                                    </div>
  
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Rohan </p>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
  
                </form>
            </div>
        </>
    )
  }
  
  export default About  