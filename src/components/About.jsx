import styled from "styled-components"
import HeroPic from "../files/HeroPic.JPG"

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
  justify-content: center;
  align-items: center;
  background-color: #0C081A;

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
    fontSize: "50px",
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
    flexDirection: "column",
  })}
  ${tablet({
    flexDirection: "column",
  })}
`
const ImgContainer = styled.div`
  padding-right: 70px;

  ${mobile({
    padding: "0",
  })}
  ${tablet({
    padding: "0",
  })}
  
`
const Img = styled.img`
  height: 250px;
  width: 300px;

  ${mobile({
  height: "175px",
  width: "190px"
  })}
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
`
const Paragraph1 = styled.p`
`
const Paragraph2 = styled.p`
`
const Paragraph3 = styled.p`
`
const Paragraph4 = styled.p`
`

const About = () => {
  return (
    <Container id="about">
      <Wrapper> 
        <Header>About Me</Header>
        <ThumbnailContainer>
        <ImgContainer>
         <Img src= {HeroPic}/>
        </ImgContainer>
          <InfoContainer>
          <Paragraph1>
           My name is Lutho Jara, I'm a front-end developer based in Pretoria
           ,Gauteng, South Africa.
          </Paragraph1>
          <Paragraph2>
           I create well designed, neatly coded interfaces. Regardless of the language I know
           or which tech stack I specialise in at that moment, one thing is for sure and that is,
          </Paragraph2>  
          <Paragraph3>
           I am a problem solver.
          </Paragraph3>
          <Paragraph4>
            I solve problems using code and I get the job done as efficiently as possible.
          </Paragraph4> 
          </InfoContainer>
          </ThumbnailContainer>
      </Wrapper>
    </Container>
  )
}

export default About