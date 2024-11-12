import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            setIsDarkTheme(currentTheme === 'dark');
        }
    }, []);

    const switchTheme = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsDarkTheme(newTheme === 'dark');
    };


    const location = useLocation(); // Get current location from react-router
    const [activeNav, setActiveNav] = useState(location.pathname); // Initialize state with the current path

    const handleNavClick = (path) => {
        setActiveNav(path); // Update active link when a nav link is clicked
    };


  return (
    <div>
        <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light stroke py-lg-0">
                <h1><Link className="navbar-brand pe-xl-5 pe-lg-4" to="/">
                        <span className="sublog">GREATNESS</span>TECH HUB
                    </Link></h1>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                    <Link 
                        className={`nav-link ${activeNav === '/' ? 'active' : ''}`} 
                        to="/" 
                        onClick={() => handleNavClick('/')}
                    >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className={`nav-link ${activeNav === '/about' ? 'active' : ''}`} 
                        to="/about" 
                        onClick={() => handleNavClick('/about')}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className={`nav-link ${activeNav === '/services' ? 'active' : ''}`} 
                        to="/services" 
                        onClick={() => handleNavClick('/services')}
                    >
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className={`nav-link ${activeNav === '/contact' ? 'active' : ''}`} 
                        to="/contact" 
                        onClick={() => handleNavClick('/contact')}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <ul className="navbar-nav search-right mt-lg-0 mt-2">
                <li className="nav-item me-lg-3">
                    <Link className="phone-btn btn btn-primary btn-style d-none d-lg-block btn-style ms-2">
                    <i className="fas fa-server"></i>
                    </Link>
                </li>
                {/* <li className="nav-item" title="Search">
                    <a href="#search" className="search-search">
                        <span className="fas fa-search" aria-hidden="true"></span>
                    </a>
                </li> */}
            </ul>
            {/* Other elements remain the same */}
            {/* Toggle switch for light and dark theme */}
            {/* Search popup */}
            <div id="search" className="w3lpop-overlay">
                <div className="w3lpopup">
                    <form action="#formsearch" method="GET" className="d-sm-flex">
                        <input className="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" required="" />
                        <button className="btn btn-style btn-primary" type="submit">Search</button>
                        <a className="close" href="#formsearch">&times;</a>
                    </form>
                </div>
            </div>
            {/* /search popup */}
        </div>
                {/* toggle switch for light and dark theme */}
                <div className="mobile-position">
            <nav className="navigation">
                <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input 
                            type="checkbox" 
                            id="checkbox" 
                            checked={isDarkTheme} 
                            onChange={switchTheme} 
                        />
                        <div className="mode-container">
                            <i className="gg-sun"></i>
                            <i className="gg-moon"></i>
                        </div>
                    </label>
                </div>
            </nav>
        </div>
                {/* //toggle switch for light and dark theme */}
            </nav>
        </div>
        </header>
    </div>
  )
}

export default Navbar
