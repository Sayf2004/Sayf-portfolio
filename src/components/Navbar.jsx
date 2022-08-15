import styled from "styled-components";
import { device } from "../device";
import { useState } from "react";
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
    width: 40%;
    left: ${(props) => (props.slide ? "60%" : "100%")};
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
  width: 30%;
  display: none;
  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${(props) => (props.ani ? "rotate(90deg)" : "")};
    transition: all 0.5s ease-in-out;
    display: flex;
    height: 100%;
    position: relative;
    z-index: 2;
  }
  @media ${device.mobileL} {
    width: 40%;
  }
`;

const Button = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SpanTop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  transform: ${(props) =>
    props.ani ? "rotate(45deg) translateX(6px) translateY(6px)" : ""};
  transition: all 0.5s ease-in-out;
`;
const SpanMid = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  visibility: ${(props) => (props.ani ? "hidden" : "visible")};
  top: ${(props) => (props.ani ? "0" : "5px")};
`;

const SpanBot = styled.div`
  position: absolute;
  top: ${(props) => (props.ani ? "0" : "10px")};
  width: 100%;
  height: 2px;
  background-color: black;
  transform: ${(props) =>
    props.ani ? "rotate(-45deg) translateX(-6px) translateY(6px)" : ""};
  transition: all 0.5s ease-in-out;
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
        {/* <FaBars /> */}
        <Button ani={visible}>
          <SpanTop ani={visible}></SpanTop>
          <SpanMid ani={visible}></SpanMid>
          <SpanBot ani={visible}></SpanBot>
        </Button>
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
