import { GitHub, LinkedIn, YouTube } from "@mui/icons-material";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

//Importing responsiveness
import {mobile} from "../responsive"
import {tablet} from "../responsive"

const Container = styled.div`
  position: relative;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 205px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${mobile({
  padding: "145px 0px"
  })}
  ${tablet({
  padding: "125px 0px"
  })}
` 
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: 10px;
  color: #fff;
  background-color: ${(props) => props.color};

  ${mobile({
    margin: "10px 10px 10px 2px"
  })}
  ${tablet({
    margin: "10px 10px 10px 8px"
  })}
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transform: rotate(90deg);
  width: 75px;
  height: 1rem;

  ${mobile({
    width: "50px"
  })}
  ${tablet({
    width: "55px"
  })}
`
const Email = styled.p`
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  color: #0C081A;
  cursor: pointer;

  &:hover + div {
    display: block;
  }
`
const EmailInfo = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  padding: 10px;
  font-size: 22px;
  color: #000;
  background-color: #fff;
  transform: rotate(-90deg);
  border-radius: 5%;
`;

const Sidenavbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
  
    //This section is for the sidenavbars so that they stick in place
    const handleScroll = () => {
      if (window.scrollY > .1) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setSticky]);
  
  //This section is so that when the email is clicked, it is also copied
  
  const emailRef = useRef(null);

  const handleClick = () => {
    navigator.clipboard.writeText(emailRef.current.textContent);
  };

  //This section is so that when the user hovers they can see the textbox saying:
  //Click on the email to copy! No need to manually select
  
  const [showTextBox, setShowTextBox] = useState(false);

  const handleMouseEnter = () => {
    setShowTextBox(true);
  };

  const handleMouseLeave = () => {
    setShowTextBox(false);
  };
  
  return (
    <Container>
      <Wrapper sticky={isSticky}>
        <Left>
          <SocialContainer>
            <SocialIcons color="#000000" href="https://github.com/LuthoJara" target="_blank">
              <GitHub />
            </SocialIcons>
            <SocialIcons color="#224b9c" href="https://www.linkedin.com/in/luthojara/" target="_blank">
              <LinkedIn />
            </SocialIcons>
            <SocialIcons color="#ff0000" href="https://www.youtube.com/channel/UCGyfna7rcLB6v95xvVsE0Jw" target="_blank">
              <YouTube />
            </SocialIcons>
          </SocialContainer>
        </Left>
        <Right>
          <Email ref={emailRef} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Luthojaraofficial@gmail.com
          </Email>
          {showTextBox &&<EmailInfo>Click on the email to copy!   
          No need to manually select.</EmailInfo>}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Sidenavbar;
