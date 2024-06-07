import React from 'react'
import NavBar from './NavBar'

const Contact = () => {
    return (
        <div>
          <NavBar/>

            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="row g-">
                            <div className="padding">
                                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">
                                        Name{" "}
                                    </label>
                                    <input type="text" class="form-control" placeholder="Enter your Name" />
                                </div>
                                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">
                                        EMAIL ID
                                    </label>
                                    <input type="text" class="form-control" placeholder="Enter Email ID" />
                                </div>

                                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">
                                        Subject
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="5"
                                        rows="2"
                                        class="form-control"
                                    ></textarea>
                                </div>

                                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="20"
                                        rows="5"
                                        class="form-control"
                                    ></textarea>
                                </div>

                                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">
                                        Phone Number(optional)
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">
                                        Physical Address(optional)
                                    </label>
                                    <input type="text" class="form-control" placeholder="Enter Address" />
                                </div>
                            </div>
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button type="button" class="btn btn-primary">
                                    Send details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Contact
