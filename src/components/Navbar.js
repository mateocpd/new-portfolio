/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import { BsList } from "react-icons/bs";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-nav.svg";
import navIcon3 from "../assets/img/email-nav.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return window.removeEventListener("scroll", onScroll); 
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">
          <BsList>

          </BsList>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active nabvar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active nabvar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active nabvar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/mateocapdevila/" target='_blank' rel="noopener noreferrer"><img src={navIcon1} alt=''/></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/mateocpd"><img src={navIcon2} alt=''/></a>
                <a target="_blank" rel="noreferrer" href="mailto:mateo.capdevila2801@gmail.com?Subject=Portfolio"><img src={navIcon3} alt=''/></a>
            </div>
            <a href='#connect'>
            <button className='vdd' onClick={() => console.log('connect')}><span>Let&apos;s Connect</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
