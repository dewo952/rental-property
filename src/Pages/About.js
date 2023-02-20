import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import Image1 from "../Assets/image18.jpg";
import Flash from "react-reveal/Flash";
import { Button } from "../Components/Button";

const About = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(true);
  return (
    <>
      <Image />
      <Wrapper>
        <ContainerWrapper>
          <Flash>
            <div className="container1">
              <h1>About Us</h1>
              <p>
                Welcome to our rental properties website! We're a team of
                passionate real estate professionals who are dedicated to
                helping you find the perfect rental property to call home.
              </p>
              <p>
                Our company was founded with the goal of providing high-quality
                rental properties that meet the needs and preferences of a
                variety of renters. We believe that everyone deserves a
                comfortable and welcoming living space, and we strive to make
                that a reality for our tenants.
              </p>
              <p>
                Our team is made up of experienced real estate agents, property
                managers, and maintenance professionals who work together to
                ensure that every rental property we manage is well-maintained
                and in top condition. We pride ourselves on our attention to
                detail and our commitment to providing the highest level of
                customer service.
              </p>
              <p>
                We understand that finding the right rental property can be a
                stressful and overwhelming process, which is why we work hard to
                make it as easy and straightforward as possible. We offer a
                variety of properties in different locations and price ranges to
                suit every budget and lifestyle. Whether you're a student, a
                young professional, or a family, we have a rental property that
                will meet your needs.
              </p>
              <p>
                Thank you for considering our rental properties for your next
                home. We're committed to providing you with the best possible
                rental experience, and we look forward to working with you!
              </p>
              <Button className="button" to="/contact">
                Contact Us
              </Button>
            </div>
          </Flash>
        </ContainerWrapper>
      </Wrapper>
    </>
  );
};
export default About;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${Image1});
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: multiply;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerWrapper = styled.div`
  min-height: 70vh;
  width: 70%;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  z-index: 4;
  .container1 {
    margin-top: 0.5rem;
    margin-left: 5rem;

    h1 {
      font-size: 2rem;
      margin: 1rem 0 1rem 1rem;
      text-transform: capitalize;
    }
    p {
      width: 70%;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
    }
    a {
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
  .button {
    background: ${({ primary }) => (primary ? "#000" : "#4d4d4d")};

    white-space: nowrap;
    outline: none;
    border: none;
    border-radius: 5px;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
    color: ${({ primary }) => (primary ? "#fff" : "#fff")};
    font-size: ${({ big }) => (big ? "20px" : "14px")};
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 3rem;
    .container1 {
      width: 100%;
      p {
        width: 100%;
      }
    }
  }
`;
