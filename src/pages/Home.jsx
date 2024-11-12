import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        {/*/Header*/}
        <Navbar/>
        {/*//Header*/}

        <section className="w3l-main-content" id="home">
      <div className="container">
        <div className="row align-items-center w3l-slider-grids">
          <div className="col-lg-6 w3l-slider-left-info pe-lg-5">
            <h6 className="title-subhny mb-2">We are gathered to</h6>
            <h3 className="mb-2 title">
              <span>Optimize</span> Your
            </h3>
            <h3 className="mb-4 title">Tech Presence</h3>
            <p className="w3banr-p">
            We specialize in enhancing your web presence by creating dynamic,
            user-friendly websites that engage your audience and drive results.
            Our goal is to deliver tailored solutions that not only meet your business needs but also position your brand for success in the digital space.
            </p>
            <div className="w3l-buttons mt-sm-5 mt-4">
              <Link to='/about' className="btn btn-primary btn-style me-2" to="/about">
                Read More
              </Link>
              <Link to='/contact' className="btn btn-outline-primary btn-style" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-lg-6 w3l-slider-right-info mt-lg-0 mt-5 ps-lg-5 align-items-center">
            <div className="w3l-main-slider banner-slider">
              <div className="slider-info">
                <div className="w3l-slidehny-img banner-top1">
                  <img src="assets/images/greatnesstech.jpg" alt="Banner" className="radius-image img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>

        <section className="w3l-grids-3 py-5">
      <div className="container py-md-5 py-3">
        <div className="row align-items-center">
          <div className="col-lg-6 header-sec">
            <h6 className="title-subhny mb-2">Design & Develop</h6>
            <h3 className="title-w3l">Let's grow your business together.</h3>
          </div>
          <div className="col-lg-6 header-sec-paraw3 ps-lg-4">
            <p>
            Enhance your online impact with cutting-edge web solutions.
            Our expertise in full-stack development ensures a seamless and user-friendly experience for your customers,
            helping your business thrive in the digital space.
            </p>
          </div>
        </div>

        <div className="row bottom_grids text-left mt-lg-5 align-items-center">
          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grid-block">
              <a className="d-block">
                <div className="grid-block-infw3">
                  <div className="grid-block-icon">
                    <span className="fas fa-user-shield"></span>
                  </div>
                  <h4 className="my-3">Great Support.</h4>
                </div>
                <p>
                Our team is dedicated to offering you great support.
                We’re here to help you navigate your digital marketing and web development needs.
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grid-block active">
              <a className="d-block">
                <div className="grid-block-infw3">
                  <div className="grid-block-icon">
                    <span className="far fa-edit"></span>
                  </div>
                  <h4 className="my-3">Perfect Design.</h4>
                </div>
                <p>
                We create stunning and user-friendly websites that capture attention and drive results,
                tailored to your unique vision.
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grid-block">
              <a className="d-block">
                <div className="grid-block-infw3">
                  <div className="grid-block-icon">
                    <span className="fas fa-signal" aria-hidden="true"></span>
                  </div>
                  <h4 className="my-3">SEO Optimized.</h4>
                </div>
                <p>
                Web development creates user-friendly sites that attract and engage visitors.
                A well-built website improves user experience and drives business growth.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
        </section>

        <section className="w3l-circles-sec" id="circle">
        <div className="midd-w3 py-5">
            <div className="container py-lg-5 py-3">
                {/*/row-2*/}
                <div className="w3l-circles">
                    <div className="w3l-circles-infhny">
                        <div className="title-content text-left">
                            <h6 className="title-subhny mb-2">Open the future</h6>
                            <h3 className="title-w3l two">Innovative Design & Branding

                            </h3>
                        </div>
                        <p className="mt-md-4 mt-3">At our core, we believe that great design transcends aesthetics; it shapes experiences.
                          Our innovative approach combines creativity and strategy to create captivating designs that resonate with your audience. We focus on understanding your brand's unique identity and translating it into visual storytelling. By integrating user-centric principles, we ensure that every design not only looks stunning but also serves its purpose effectively.
                          Let us help you elevate your brand and make a lasting impression in today’s competitive landscape. </p>
                    
                    </div>
                </div>
                {/*//row-2*/}

            </div>
        </div>
        </section>

        <section className="w3l-img-grids" id="gridsimg">
        <div className="blog py-5" id="classNamees">
            <div className="container py-lg-5">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                        <div className="w3img-grids-info">
                            <div className="w3img-grids-info-gd position-relative">
                                <a>
                                    <div className="page">
                                        <div className="photobox photobox_triangular photobox_scale-rotated">
                                            <div className="photobox__previewbox media-placeholder">
                                                <img className="img-fluid photobox__preview media-placeholder__media radius-image" src="assets/images/g4.jpg" alt=""/>
                                            </div>
                                            <div className="photobox__info-wrapper">
                                                <div className="photobox__info"><span>Responsive</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="w3img-grids-info-gd-content mt-4">
                                    <a className="titile-img d-block">
                                        <h4 className="mb-2">
                                            Research.</h4>
                                    </a>
                                    <p className="">Research helps businesses understand their market and customers better.
                                      By gathering information, companies can make smarter decisions and improve their products or services.
                                      This knowledge leads to better strategies and stronger connections with clients. </p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                        <div className="w3img-grids-info">
                            <div className="w3img-grids-info-gd position-relative">
                                <a>
                                    <div className="page">

                                        <div className="photobox photobox_triangular photobox_scale-rotated">
                                            <div className="photobox__previewbox media-placeholder">
                                                <img className="img-fluid photobox__preview media-placeholder__media radius-image" src="assets/images/g2.jpg" alt=""/>
                                            </div>
                                            <div className="photobox__info-wrapper">
                                                <div className="photobox__info"><span>Unlimited </span></div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                                <div className="w3img-grids-info-gd-content mt-4">
                                    <a className="titile-img d-block">
                                        <h4 className="mb-2">
                                            Presentation.</h4>
                                    </a>
                                    <p className="">Web development is essential for building an effective online presence.
                                      We focus on creating user-friendly, visually appealing websites that engage visitors and drive results.
                                      Our team uses the latest technologies to ensure your site performs well and meets your goals. </p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                        <div className="w3img-grids-info">
                            <div className="w3img-grids-info-gd position-relative">
                                <a>
                                    <div className="page">
                                        <div className="photobox photobox_triangular photobox_scale-rotated">
                                            <div className="photobox__previewbox media-placeholder">
                                                <img className="img-fluid photobox__preview media-placeholder__media radius-image" src="assets/images/banner6.jpg" alt=""/>
                                            </div>
                                            <div className="photobox__info-wrapper">
                                                <div className="photobox__info"><span> Integration</span></div>
                                            </div>

                                        </div>
                                    </div>
                                </a>
                                <div className="w3img-grids-info-gd-content mt-4">
                                    <a className="titile-img d-block">
                                        <h4 className="mb-2">
                                            Meeting.</h4>
                                    </a>
                                    <p className="">Having a strong online presence is essential for any business.
                                    By leveraging modern technologies,
                                    we can create websites that are not only visually appealing but also highly functional.
                                    We focus on creating user-friendly websites that attract and engage customers, help them meet thier desired design.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section className="w3l-video" id="video">
  <div className="video-mid-w3 py-5">
    <div className="container py-md-5 py-3">
      {/* row-1 */}
      <div className="row">
        <div className="col-lg-6 mt-lg-0 mb-5 align-self pe-lg-3">
          <div className="title-content text-left">
            <h6 className="title-subhny mb-2">Time to grow</h6>
            <h3 className="title-w3l two">Make better ideas happen fast</h3>
          </div>
          <p className="mt-md-4 mt-3">
          We help turn your ideas into reality quickly.
          Our team is dedicated to providing innovative solutions that fit your needs.
          Let's work together to achieve your goals and grow your business.
          </p>
          <div className="w3l-two-buttons">
            <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4">
              Read More
            </Link>
            <Link to="/contact" className="btn btn-style btn-white mt-lg-5 mt-4 ms-2">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-lg-6 videow3-right ps-lg-5">
          <div className="w3l-index5 py-5">
            <div className="history-info align-self text-center py-5 my-lg-5">
              <div className="position-relative py-5">
                <a
                  href="#small-dialog1"
                  className="popup-with-zoom-anim play-view text-center position-absolute"
                >
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                </a>
                {/* dialog itself, mfp-hide className is required to make dialog hidden */}
                <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                  {/* <iframe
                    src="https://player.vimeo.com/video/124801644"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe> */}
                </div>
                {/* dialog itself, mfp-hide className is required to make dialog hidden */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //row-1 */}
    </div>
  </div>
        </section>

        <section className="w3l-project-main">
            <div className="container">
                <div className="w3l-project py-md-5 py-4">
                    <div className="row py-5 align-items-center">
                        <div className="col-lg-6 w3l-project-right">
                            <div className="bottom-info">
                                <div className="header-section pr-lg-5">
                                    <h6 className="title-subhny mb-2">Stay Updated!</h6>
                                    <h3 className="title-w3l">Subscribe to our newsletter</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 w3l-project-left">
                            <form action="https://formspree.io/f/mwpkejyg" method="post" className="subscribe-wthree mt-lg-5 mt-4">
                                <div className="flex-wrap subscribe-wthree-field">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Your Email Address"
                                        name="email-subscription"
                                        required
                                    />
                                    <button className="btn btn-style btn-primary" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w3l-clients" id="clients">
      {/* /grids */}
      <div className="cusrtomer-layout py-5">
        <div className="container py-lg-5 py-md-3">
          {/* /grids */}
          <div className="testimonial-width">
            <div className="item">
              <div className="testimonial-content">
                <div className="testimonial">
                  <blockquote>
                    <i className="fas fa-quote-left"></i>
                    <q>
                    I couldn't be more pleased with the service I received! The team was incredibly professional, attentive, and efficient in developing my website. They took my ideas and transformed them into a user-friendly, visually appealing site that perfectly represents my brand.
                    The entire process was seamless, and their support has been outstanding.
                    I highly recommend them for any web development project.
                    </q>
                  </blockquote>
                  <div className="testi-des">
                    <div className="peopl align-self">
                      <h3>Ephraim Eyram</h3>
                      <p className="indentity">Ghana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /grids */}
        </div>
      </div>
      {/* //grids */}
        </section>

        
    </div>
  )
}

export default Home;
