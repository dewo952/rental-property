import React, { useEffect, useRef, useState } from "react";
import { HeroData } from "../Data/HeroData";
import styled from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Button } from "./Button";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = HeroData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentImage((c) => (c === length - 1 ? 0 : c + 1));
    };

    timeout.current = setTimeout(nextSlide, 4000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [currentImage, length]);

  if (!Array.isArray(HeroData) || HeroData.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {HeroData.map((item, index) => {
          return (
            <HeroSlide key={index}>
              {index === currentImage && (
                <HeroSlider>
                  <HeroImage src={item.image} alt={item.alt} />
                  <HeroContent>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <Button
                      className="button"
                      to={`/properties/:${item.path}`}
                      primary="true"
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {item.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
  .button {
    margin-top: 1rem;
  }
`;
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
  padding: -1rem;
`;
