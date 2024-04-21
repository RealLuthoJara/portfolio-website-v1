//Importing for the sticky menu
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

//Importing the logo
import LJLogo from "../files/LJLogo.png";

//Importing the CL + CV
import CL from "../files/CL.pdf";
import CV from "../files/CV.pdf";

//Importing responsiveness
import {mobile} from "../responsive"

const Container = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  z-index: 20;
`
const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0C081A;
  
  //Making the menu sticky
  padding: ${props => props.sticky ? "5px 10px" : "10px 20px"};
  position: ${props => props.sticky ? "fixed" : "relative"};  
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease-in-out;

  ${mobile({
    padding: "5px 5px",
  })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const MenuItem = styled.div`
  width: auto;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;

  &:hover{
  color: #d4af37;
  }

  ${mobile({
    fontSize: "0.9rem",
  })}
`
const Logo = styled.img`
  height: ${props => props.sticky ? "3.5rem" : "auto"};
  width: 11vw;
  cursor: pointer;
  border-radius: 50%;

  ${mobile({
  width: "20vw"
  })}
`
const Right = styled.div`
  flex: 7;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

useEffect(() => {
  // Reset scroll position on page load
  // window.scrollTo(0, 0);

  const handleScroll = () => {
    if (window.scrollY > 0.001) {
      setSticky(true);
    } else {
      setSticky(false);
    } 
  };
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  }
  }, [setSticky])

  // On the Download CV it enables you to download the CV
  const downloadCL = () => {
    window.open(CL, '_blank');
  }
  const downloadCV = () => {
    window.open(CV, '_blank');
  }

  return (
    <Container>
      <NavbarWrapper sticky={isSticky}>
        <Left>
          <MenuItem>
          <Link to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            <Logo src={LJLogo}/>
          </Link>
          </MenuItem>
        </Left>
        <Right>
          <MenuItem>
          <Link to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            About Me 
          </Link>
          </MenuItem>
          <MenuItem>
          <Link to="portfolio-projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
            Portfolio Projects
          </Link>
          </MenuItem>
          <MenuItem onClick={downloadCL}>Download Cover Letter</MenuItem>
          <MenuItem onClick={downloadCV}>Download CV</MenuItem>
        </Right>
      </NavbarWrapper>
    </Container>
  );
};
export default Navbar