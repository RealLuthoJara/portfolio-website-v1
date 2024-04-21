import { GitHub, LaunchOutlined } from "@mui/icons-material"
import styled from "styled-components"
import UCthumbnail from "../files/UCthumbnail.png"

//Importing responsiveness
import {mobile} from "../responsive"
import {tablet} from "../responsive"


const Container = styled.div`
  display: flex;
  height: auto;
  background-color: #d4af37;
  padding: 10px;
  `
const Wrapper = styled.div`
  margin: 0 auto; //This will center the div horizontally
  width: 85%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0C081A;
  z-index: 19;

  ${mobile({
  width: "75%"
  })}
`
const Header = styled.div`
  font-size: 60px;
  color: #fff;
  text-decoration: underline;
  padding: 30px 0px;

  ${mobile({
  fontSize: "42px"
  })}
`
const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0px;
  width: 75%;

  ${mobile({
    flexDirection: "column-reverse",
  })}
  ${tablet({
    flexDirection: "column-reverse",
  })}
`
const InfoContainer = styled.div`
  padding-right: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${mobile({
    padding: "0",
  })}
`
const Title = styled.div`
  font-size: 20px;
  color: #fff;
`
const Description = styled.div`
  color: #fff;
`
const Tools = styled.div`
  color: #fff;
`
const ImgContainer = styled.div`

`
const Img = styled.img`
  height: 250px;
  width: 300px;

  ${mobile({
  height: "175px",
  width: "190px"
  })}
`
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  `
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 15px 25px 0 0;
  color: #000000;
  background-color: ${(props) => props.color};
  &:hover{
    color: #d4b44a;
  }
`
const Projects = () => {
  return (
    <Container id="portfolio-projects">
      <Wrapper>
      <Header>My Projects</Header>
        <ThumbnailContainer>
          <InfoContainer>
          <Title>Umlando Creations</Title>
          <br/>
          <Description>Description: This is a ecommerce site for a labels.</Description>
          <br/>
          <Tools>Tools: VS Code, HTML, CSS, JS, React, MUI, Styled Components</Tools>
          <LinkContainer>
            <Link color="#ffffff" href="https://github.com/LuthoJara/umlando-creations" target="_blank">
              <GitHub />
            </Link>
            <Link color="#ffffff" href="https://umlandocreations.netlify.app/" target="_blank">
              <LaunchOutlined />
            </Link>
          </LinkContainer>
          </InfoContainer>
          <ImgContainer>
           <Img src= {UCthumbnail}/>
          </ImgContainer>
          </ThumbnailContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects