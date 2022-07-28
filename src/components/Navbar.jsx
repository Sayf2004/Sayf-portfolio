import styled from "styled-components";
import { device } from "../device";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
`;

const Gray = styled.div`
  position: absolute;
  width: 100%;
  height: 189vh;
  background-color: #5050506f;
  transition: all 0.1s ease-in-out;
  visibility: ${(props) => (props.gray ? "visible" : "hidden")};
`;

const LogoContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: start;
    padding-left: 10%;
    width: 60%;
  }
`;

const Logo = styled.h2`
  cursor: pointer;
`;
const Links = styled.div`
  display: flex;
  gap: 60px;
  width: 40%;
  transition: all 0.7s ease-in-out;
  @media ${device.tablet} {
    position: absolute;
    align-items: center;
    justify-content: center;
    gap: 15px;
    top: -140%;
    width: 30%;
    height: 115vh;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    left: ${(props) => (props.slide ? "70%" : "100%")};
  }
`;

const Par = styled.span`
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
`;

const Bars = styled.div`
  width: 29%;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media ${device.tablet} {
    display: flex;
    position: relative;
    z-index: 2;
  }
`;

function Navbar() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <Gray gray={visible} onClick={handleClick}></Gray>
      <LogoContainer>
        <Logo>Sayf Ketata</Logo>
      </LogoContainer>
      <Bars onClick={handleClick}>
        <FaBars />
      </Bars>
      <Links slide={visible}>
        <Par>About</Par>
        <Par>Work</Par>
        <Par>Contact</Par>
      </Links>
    </Container>
  );
}

export default Navbar;
