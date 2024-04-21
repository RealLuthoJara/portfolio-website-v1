import styled from "styled-components"

const Container = styled.div`
        
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;     
  height: 10vh;   
  background-color: #0C081A;
  color: #fff;
`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
      Designed and coded by Lutho Jara
      </Wrapper>
    </Container>
  )
}

export default Footer