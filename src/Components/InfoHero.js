import React from "react";
import styled from "styled-components";

import InfoNewHouses from "./InfoNewHouses";

const InfoHero = () => {
  return (
    <Wrapper>
      <InfoNewHouses />
    </Wrapper>
  );
};

export default InfoHero;

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
`;
