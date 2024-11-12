import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
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
                            <h2 className="w3ltop-title pt-4">Contact</h2>
                            <ul className="breadcrumbs-custom-path">
                                <li><a href="/">Home</a></li>
                                <li className="active">
                                    <span className="fas fa-angle-double-right mx-2"></span> Contact
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="w3l-contact-1 py-5" id="contact">
            <div className="contacts-9 py-lg-5 py-md-4">
                <div className="container">
                    <div className="row contact-view">
                        <div className="col-lg-5 cont-details pe-lg-5">
                            <div className="contactct-fm-text text-left">
                                <h6 className="title-subhny">Say Hello</h6>
                                <h3 className="title-w3l mb-2">Get In Touch</h3>
                                <p className="mb-sm-5 mb-4">
                                    Start working with Us that can provide everything you need to generate awareness,
                                    drive traffic, connect. We guarantee that you’ll be able to have any issue resolved
                                    within 24 hours.
                                </p>
                                <div className="cont-top">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-phone-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h5>Phone number</h5>
                                        <p><a href="tel:+(233) 54 712 1189">+(233) 54 712 1189</a></p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-envelope-open-text"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h5>Send Email</h5>
                                        <p><a href="mailto:greatnesstechhub@mail.com" className="mail">greatnesstechhub@mail.com</a></p>
                                    </div>
                                </div>
                                <div className="cont-top margin-up">
                                    <div className="cont-left text-center">
                                        <span className="fas fa-map-marker-alt"></span>
                                    </div>
                                    <div className="cont-right">
                                        <h5>Office Address</h5>
                                        <p className="pr-lg-5">Address here, M110 TESHIE LK,<br /> Teshie, Ghana.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 cont-details mt-lg-0 mt-5">
                            <div className="map-content-9">
                                <div className="map-iframe">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.635171900361!2d-0.12713732574019443!3d5.620761732996575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf84ec34105b97%3A0x30bf232d138ffe70!2sAgblezaa%20-%20Manet%20Rd%2C%20Accra!5e0!3m2!1sen!2sgh!4v1688406807321!5m2!1sen!2sgh"
                                        width="100%"
                                        height="400"
                                        frameBorder="0"
                                        style={{ border: '0' }}
                                        allowFullScreen
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="w3l-contact-1 w3hny-form-btm py-5" id="contact">
    <div className="contacts-9 py-lg-5 py-md-4">
        <div className="container">
            <div className="header-sec text-center mb-5">
                <h6 className="title-subhny mb-2">Write Us</h6>
                <h3 className="title-w3l">
                    Don't hesitate to contact us <br /> anytime with your projects.
                </h3>
            </div>
            <div className="contactct-fm map-content-9">
                <form action="https://formspree.io/f/mwpkejyg" className="pt-lg-4" method="post">
                    <div className="twice-two">
                        <input type="text" className="form-control" name="Name" id="w3lName" placeholder="Full Name" required />
                        <input type="email" className="form-control" name="Email" id="w3lSender" placeholder="Email" required />
                        <input type="text" className="form-control" name="Contact" id="w3lSubject" placeholder="Contact" required />
                    </div>

                    <textarea name="Message" className="form-control" id="w3lMessage" placeholder="Message" required></textarea>
                    <div className="text-lg-center">
                        <button type="submit" className="btn btn-primary btn-style mt-lg-5 mt-4">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
      </section>

    </div>
  )
}

export default Contact;