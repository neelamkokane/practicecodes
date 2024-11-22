import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`
const Arrow = styled.div`
    width: 50px;
  height: 50px;
  background-color: rgb(243, 236, 236);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`
const Wrapper = styled.div`
height: 100%;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`;

const ImageContainer = styled.div`
flex:1;
height: 100%;
`;
const Image = styled.img`
height: 80%;
`

const Title = styled.h1`
font-size: 70px;
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>        
      </Arrow> 
      <Wrapper>
      <Slide>
        <ImageContainer>
            <Image src="https://i.ibb.co/FVh3Sb6/pexels-karina-1622396627-27555584.jpg">                
            </Image>
        </ImageContainer>
        <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOW MORE</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>      
      <Arrow direction="right">
        <ArrowRightOutlined/>        
      </Arrow>
    </Container>
  )
}

export default Slider
