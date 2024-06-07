import React from 'react'
import NavBar from './NavBar'

const HomePage = () => {
    return (
        <div>
           <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">


                        <div id="carouselExampleDark" class="carousel carousel-dark slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src=" https://www.icoderzsolutions.com/blog/wp-content/uploads/2018/11/Doctor-Appointment-Booking-App-blog-post.jpg " class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="https://www.webinventiv.com/images/services/hospital-management-system.png  "   height={645} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="   https://www.appletechsoft.com/wp-content/uploads/2020/06/Hospital-Management-System.jpg"    height={645} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                </div>
<br />
                <div className="row g-3">
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                    
                    <div class="card" >
                    
  <img src=" https://tse4.mm.bing.net/th?id=OIP.N8jSZBWIllTTaX0oHB8BTAHaEK&pid=Api&P=0&h=180 "   class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

                </div>
                <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                <div class="card" >
                    
                    <img src=" https://tse4.mm.bing.net/th?id=OIP.N8jSZBWIllTTaX0oHB8BTAHaEK&pid=Api&P=0&h=180 " class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                </div>
                <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">


                <div class="card" >
                    
                    <img src=" https://tse4.mm.bing.net/th?id=OIP.N8jSZBWIllTTaX0oHB8BTAHaEK&pid=Api&P=0&h=180 " class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>


                </div>

            </div>



        </div>



    </div >
  )
}

export default HomePage
