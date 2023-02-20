import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade top>
      <Wrapper>
        <Container>
          <TextContainer>
            <h1>"We’re the key to your new home."</h1>
            <p className="justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              repudiandae beatae unde voluptatibus molestias nesciunt. Suscipit
              tempora quaerat alias cumque.
            </p>
          </TextContainer>
          <ExploreContainer>
            <Flex>
              <ContainerExplore>
                <h2>Explore</h2>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/properties">Properties</Link>
                <Link to="/contact">Contact</Link>
              </ContainerExplore>
              <ContainerExplore>
                <h2>Legal</h2>
                <p>Terms</p>
                <p>Privacy</p>
                <p>&copy; 2022 Real Estate.</p>
              </ContainerExplore>
            </Flex>
      
          </ExploreContainer>
        </Container>
      </Wrapper>
    </Fade>
  );
};

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  min-height: 60vh;
  background: #4d4d4d;
  display: flex;
  align-items: center;
`;

const Container = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  h1 {
    font-size: 3rem;
    color: #fff;
    margin: 0 0 0.7rem 0;
  }
  .justify {
    text-align: justify;
  }
  p {
    color: #bababa;
    margin: 0.7rem 0;
  }
  @media screen and (max-width: 768px) {
    padding-top: 1.5rem;
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;



const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ExploreContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerExplore = styled.div`
  display: grid;
  font-weight: 400;
  transition: 0.4s;
  margin-bottom: auto;
  h2 {
    color: #fff;
    margin: 0.5rem 0;
  }
  a,
  p {
    color: #ababab;
    cursor: pointer;
    text-decoration: none;
    margin: 0.4rem 0;
    &:hover {
      color:#49111c;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    h2 {
      font-size: 0.9rem;
    }
    a,
    p {
      font-size: 0.75rem;
    }
  }
`;
