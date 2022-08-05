import React from 'react';
import images from 'next/image';
import styles from 'styles\demo.css'

const About = () => {
    return (
        <>
            <div className="student-profile py-4">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card shadow-sm">
                      <div className="card-header bg-transparent text-center">
                        <img src='public\Boyim.png' width={120} height={120} alt="" />
                        <h3>Ishmam Ahasan Samin</h3>
                      </div>
                      <div className="card-body">
                        <p className="mb-0"><strong className="pr-1">Student ID:</strong>321000001</p>
                        <p className="mb-0"><strong className="pr-1">Class:</strong>4</p>
                        <p className="mb-0"><strong className="pr-1">Section:</strong>A</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="card shadow-sm">
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
                      </div>
                      <div className="card-body pt-0">
                        <table className="table table-bordered">
                          <tr>
                            <th width="30%">Roll</th>
                            <td width="2%">:</td>
                            <td>125</td>
                          </tr>
                          <tr>
                            <th width="30%">Academic Year	</th>
                            <td width="2%">:</td>
                            <td>2020</td>
                          </tr>
                          <tr>
                            <th width="30%">Gender</th>
                            <td width="2%">:</td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <th width="30%">Religion</th>
                            <td width="2%">:</td>
                            <td>Group</td>
                          </tr>
                          <tr>
                            <th width="30%">blood</th>
                            <td width="2%">:</td>
                            <td>B+</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                      <div style="height: 26px"></div>
                    <div className="card shadow-sm">
                      <div className="card-header bg-transparent border-0">
                        <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                      </div>
                      <div className="card-body pt-0">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default About




const About = () => {
  return (
      <>
          <div className="container emp-profile">
              <form method="">
                  <div className="row">
                      <div className="col-md-4">
                          <div className='profile-img'>
                          <img src='public\Boyim.png' width={120} height={120} alt="" />
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