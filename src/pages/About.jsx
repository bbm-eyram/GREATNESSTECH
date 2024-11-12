import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const About = () => {

  const teamMembers = [
    {
        name: 'Glendell Paul',
        role: 'Web Developer',
        imgSrc: 'assets/images/team1.jpg',
        socialLinks: {
            facebook: '#',
            instagram: '#',
        },
    },
    {
        name: 'Dania Ruthor',
        role: 'Editor',
        imgSrc: 'assets/images/team2.jpg',
        socialLinks: {
            facebook: '#',
            instagram: '#',
        },
    },
    {
        name: 'Gambria Rich',
        role: 'UX Designer',
        imgSrc: 'assets/images/team3.jpg',
        socialLinks: {
            facebook: '#',
            instagram: '#',
        },
    },
    {
        name: 'Laura Carl',
        role: 'Web Designer',
        imgSrc: 'assets/images/team4.jpg',
        socialLinks: {
            facebook: '#',
            instagram: '#',
        },
    },
];

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
                            <h2 className="w3ltop-title pt-4">About Us</h2>
                            <ul className="breadcrumbs-custom-path">
                                <li><a href="/">Home</a></li>
                                <li className="active">
                                    <span className="fas fa-angle-double-right mx-2"></span> About
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="w3l-feature-with-photo-1">
            <div className="feature-with-photo-hny py-5">
                <div className="container py-lg-5">
                    <div className="feature-with-photo-content">
                        <div className="ab-in-flow row mb-lg-5 mb-3">
                            <div className="col-lg-7 ab-right pl-lg-5">
                                <h6 className="title-subhny mb-2"><span>About Us</span></h6>
                                <h3 className="title-w3l mb-4">
                                    We’ve skilled in wide range of web and other digital tools & designs.
                                </h3>
                                <p className="mt-4">
                                We are a team of highly skilled professionals specializing in a wide range of web development and design solutions. With a deep understanding of the latest technologies and trends, we are committed to delivering innovative and customized solutions to help businesses grow and succeed online. From creating user-friendly websites to implementing effective digital strategies,
                                our focus is on ensuring our clients achieve their goals with precision and creativity.
                                </p>
                                <div className="w3l-buttons mt-sm-5 mt-4">
                                    <Link className="btn btn-primary btn-style me-2" to="/about">Read More</Link>
                                    <Link className="btn btn-outline-primary btn-style mr-2" to="/services">Services</Link>
                                </div>
                            </div>
                            <div className="col-lg-5 ab-left ps-lg-5">
                                <img src="assets/images/ab1.jpg" className="img-fluid radius-image" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className="w3l-servicesblock w3l-servicesblock1 py-5" id="progress">
            <div className="container py-lg-5 py-md-4 py-2">
                <div className="row">
                    <div className="col-lg-6 mb-lg-0 mb-5 pe-lg-5">
                        <h6 className="title-subhny mb-2">Progress Bars</h6>
                        <h3 className="title-w3l">The growth accelerator for startups</h3>
                        <p className="mt-md-4 mt-3">
                        At our growth accelerator, we specialize in empowering startups to transform their innovative ideas into robust software solutions.
                        We provide tailored support in areas such as software development, user experience design, and agile project management. Our experienced team collaborates closely with founders to refine their products, ensuring they meet market needs and exceed user expectations. With access to cutting-edge technologies and a network of industry experts,
                        we help startups navigate the complexities of development and scale effectively. 
                        </p>
                    </div>
                    <div className="col-lg-6 align-self pe-lg-4">
                        <div className="progress-info info1">
                            <h6 className="progress-tittle">REACTJS <span>98%</span></h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '98%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress-info info1">
                            <h6 className="progress-tittle">NEXTJS <span>90%</span></h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '90%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress-info info2">
                            <h6 className="progress-tittle">KOTLIN <span>85%</span></h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '85%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="progress-info info3">
                            <h6 className="progress-tittle">GRAPHIC DESIGN <span>99%</span></h6>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '99%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* <div className="w3l-team-main py-5" id="team">
            <div className="container py-md-5 py-3">
                <div className="header-secw3 text-center">
                    <h6 className="title-subhny mb-2">Our Team</h6>
                    <h3 className="title-w3l mb-3">Creative Team</h3>
                </div>
                <div className="row w3ls_team_grids text-center">
                    {teamMembers.map((member, index) => (
                        <div className="col-md-3 col-6 w3_agile_team_grid mt-md-5 mt-4" key={index}>
                            <div className="box4">
                                <a href="#">
                                    <img src={member.imgSrc} alt={member.name} className="img-fluid radius-image" />
                                </a>
                                <div className="box-content">
                                    <h3 className="title">{member.role}</h3>
                                    <ul className="icon">
                                        <li><a href={member.socialLinks.facebook} className="fab fa-facebook-f"></a></li>
                                        <li><a href={member.socialLinks.instagram} className="fab fa-instagram"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h4>
                                <a href="#url" className="title-head">{member.name}</a>
                            </h4>
                            <p>Lorem ipsum</p>
                        </div>
                    ))}
                </div>
            </div>
      </div> */}

      <section className="w3l-project-main">
            <div className="container">
                <div className="w3l-project py-md-5 py-4">
                    <div className="row py-5 align-items-center">
                        <div className="col-lg-8 w3l-project-right">
                            <div className="bottom-info">
                                <div className="header-section pr-lg-5">
                                    <h6 className="title-subhny mb-2">Work With Us!</h6>
                                    <h3 className="title-w3l">
                                        Get In Touch with US <br /> Let's Do It!
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 w3l-project-left about-w3page-btns mt-lg-0 mt-4">
                            <div className="w3l-buttons d-sm-flex">
                                <Link className="btn btn-primary btn-style me-2" href="/about">Read More</Link>
                                <Link className="btn btn-outline-primary btn-style" href="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

    </div>
  )
}

export default About;
