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
`;

const Gray = styled.div`
  position: absolute;
  transition: all 0.1s ease-in-out;
  @media ${device.tablet} {
    width: 100%;
    height: 189vh;
    background-color: #5050506f;
    visibility: ${(props) => (props.gray ? "visible" : "hidden")};
  }
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
  transition: left 0.5s ease-in-out;
  @media ${device.tablet} {
    position: absolute;
    align-items: center;
    justify-content: start;
    gap: 15px;
    top: 0;
    width: 30%;
    height: 100vh;
    padding-top: 25%;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    left: ${(props) => (props.slide ? "70%" : "100%")};
  }
  @media ${device.mobileL} {
    padding-top: 50%;
  }
`;

const Par = styled.span`
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 20px;
  }
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
        <Link spy={true} smooth={true} to="about">
          <Par onClick={handleClick}>About</Par>
        </Link>
        <Par>Work</Par>
        <Par>Contact</Par>
      </Links>
    </Container>
  );
}

export default Navbar;
