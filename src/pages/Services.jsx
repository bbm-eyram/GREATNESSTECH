import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      {/*/Header*/}
       <Navbar/>
      {/*//Header*/}

      <section className="w3l-about-breadcrumb">
            <div className="breadcrumb-bg breadcrumb-bg-about">
                <div className="container py-lg-5 py-sm-4">
                    <div className="w3breadcrumb-gids text-center">
                        <div className="w3breadcrumb-info mt-5">
                            <h2 className="w3ltop-title pt-4">Services</h2>
                            <ul className="breadcrumbs-custom-path">
                                <li><a href="/">Home</a></li>
                                <li className="active">
                                    <span className="fas fa-angle-double-right mx-2"></span> Services
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="w3l-services2" id="services">
            <div id="cwp23-block" className="py-5">
                <div className="container py-lg-5">
                    <div className="row cwp23-content mb-lg-5 mb-4">
                        <div className="col-lg-6 cwp23-img">
                            <h6 className="title-subhny mb-2">What We Do?</h6>
                            <h3 className="title-w3l mb-4">
                                Develop, analyze, and optimize! We do it all for you.
                            </h3>
                        </div>
                        <div className="col-lg-6 cwp23-text mt-lg-0 mt-5 ps-lg-5">
                            <p className="mb-4">
                            We specialize in delivering end-to-end solutions for your business, focusing on developing, analytics, and optimization. From crafting compelling digital campaigns to analyzing performance metrics, we ensure your brand reaches the right audience and maximizes impact.
                            Our team leverages the latest technologies and best practices to fine-tune strategies, boost engagement, and drive growth.
                            </p>
                            <p className="mb-4">
                            Whether it's enhancing your online presence or optimizing your digital marketing efforts,
                            we handle everything to help you achieve measurable success and stay ahead in the competitive landscape.
                            </p>
                        </div>
                    </div>
                    <div className="row cwp23-content">
                        <div className="col-lg-6 cwp23-img">
                            <div className="w3l-market-seo-img">
                                <img src="assets/images/mac-business.png" alt="business" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 cwp23-text mt-lg-0 mt-5 ps-lg-5">
                            <h6 className="title-subhny mb-2">What We Offer</h6>
                            <h3 className="title-w3l mb-4">The Tech agency for growth</h3>
                            <p className="mb-4">
                            At our tech agency, we offer comprehensive solutions designed to drive your business growth.
                            From custom software development to cutting-edge web and mobile applications, we specialize in building scalable digital products that meet your unique needs. Our team of experts leverages the latest technologies and industry best practices to deliver innovative, user-focused solutions. Whether you're looking to enhance your digital presence or streamline operations through automation,
                            we are committed to providing the tools and expertise to accelerate your success in today’s competitive tech landscape.
                            </p>
                            <div className="w3l-buttons mt-sm-5 mt-4">
                                <Link className="btn btn-primary btn-style me-2" to="/about">Read More</Link>
                                <Link className="btn btn-outline-primary btn-style mr-2" to="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="w3l-features w3l-passion-mid-sec py-5" id="features">
            <div className="container py-lg-5 py-md-4 py-2">
                <div className="main-cont-wthree-2 align-items-center text-left">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6">
                            <div className="grids-1 box-wrap">
                                <div className="icon">
                                    <i className="fas fa-pencil-ruler"></i>
                                </div>
                                <h4>
                                    <a className="title-head mb-3">Creative Plan & Design</a>
                                </h4>
                                <p className="text-para">
                                We bring your vision to life with innovative design and strategic planning.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-md-0 mt-5">
                            <div className="grids-1 box-wrap">
                                <div className="icon">
                                    <i className="fas fa-toolbox"></i>
                                </div>
                                <h4>
                                    <a className="title-head mb-3">Best Professional Liability</a>
                                </h4>
                                <p className="text-para">
                                Our team is committed to delivering high-quality services while safeguarding your business.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                            <div className="grids-1 box-wrap">
                                <div className="icon">
                                    <i className="fas fa-tools"></i>
                                </div>
                                <h4>
                                    <a className="title-head mb-3">Technology Advisory</a>
                                </h4>
                                <p className="text-para">
                                We offer strategic technology consulting to help you stay ahead in a fast-evolving digital landscape.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-md-0 mt-5">
                            <div className="grids-1 box-wrap">
                                <div className="icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h4>
                                    <a className="title-head mb-3">Dedicated To Our Clients</a>
                                </h4>
                                <p className="text-para">
                                We work closely with each client to understand their unique needs and provide personalized support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="w3l-services py-5" id="services">
      <div className="container py-md-5 py-3 pb-4">
        <div className="title-content mb-5 text-center">
          <h6 className="title-subhny mb-2">Services</h6>
          <h3 className="title-w3l mb-4">We Do</h3>
        </div>
        <div className="row about-cols">
          {/* <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div className="about-col">
              <div className="icon"><i className="fas fa-server"></i></div>
              <h4 className="title"><a href="#">Software development</a></h4>
              <p>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
              </p>
            </div>
          </div> */}

          <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div className="about-col">
              <div className="icon"><i className="fas fa-code"></i></div>
              <h4 className="title"><a href="#">Web App Development</a></h4>
              <p>
              Our web app development services focus on creating scalable, high-performance applications tailored to your business needs.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div className="about-col">
              <div className="icon"><i className="fas fa-laptop-code"></i></div>
              <h4 className="title"><a href="#">Website Development</a></h4>
              <p>
              We specialize in building responsive, visually appealing, and fast-loading websites that drive engagement and deliver results.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div className="about-col">
              <div className="icon"><i className="far fa-edit"></i></div>
              <h4 className="title"><a href="#">Front-end Master Class</a></h4>
              <p>
              With hands-on experience, this class equips you with the expertise to build responsive, high-performance websites that users love.
              </p>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div className="about-col">
              <div className="icon"><i className="fas fa-key"></i></div>
              <h4 className="title"><a href="#">Keyword Research</a></h4>
              <p>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
              </p>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div className="about-col">
              <div className="icon"><i className="fas fa-sitemap"></i></div>
              <h4 className="title"><a href="#">Optimization</a></h4>
              <p>
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      </section>
    </div>
  )
}

export default Services;
