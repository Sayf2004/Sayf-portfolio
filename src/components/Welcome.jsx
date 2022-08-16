import { BsArrowUpRight } from "react-icons/bs";
import { useEffect } from "react";
import styled from "styled-components";
import { device } from "../device";
import AOS from "aos";
import "aos/dist/aos.css";

const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8% 10%;
  @media ${device.tablet} {
    padding: 15% 10%;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: -1;
`;

const TextUp = styled.h2`
  font-weight: 400;
  font-size: 32px;
  margin-bottom: -10px;
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
    margin-bottom: 0;
  }
`;
const TextMid = styled.h2`
  font-weight: 400;
  font-size: 32px;
  @media ${device.tablet} {
    font-size: 24px;
    margin-bottom: 10px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
`;
const TextBold = styled.span`
  color: #007fef;
  font-weight: 700;
  font-size: 48px;
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
`;
const TextBot = styled.span`
  font-size: 22px;
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
`;

const Div = styled.div`
  margin-top: 40px;
  display: flex;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  color: white;
  background-color: black;
  border: 2px white solid;
  transition: 0.6s all ease-in-out;
  font-size: 16px;
  border-radius: 15px;
  &:hover {
    border: 2px black solid;
    color: black;
    background-color: white;
  }

  @media ${device.mobileM} {
    padding: 8px;
    font-size: 14px;
  }
`;

const ButtonText = styled.span`
  margin-right: 7px;
`;

function Welcome() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Wrapper>
      <Container
        data-aos-delay="0"
        data-aos="slide-down"
        data-aos-duration="2000"
        data-aos-mirror="false"
      >
        <TextUp>Hi, I'm Sayf Ketata.</TextUp>
        <TextMid>
          <TextBold>A High School Student</TextBold> based in Sfax,Tunisia
        </TextMid>
        <TextBot>
          A Rising Senior, <b>Pioneer Highschool of Sfax</b>
        </TextBot>
      </Container>
      <Div>
        <Button>
          <ButtonText>Contact</ButtonText> <BsArrowUpRight />
        </Button>
      </Div>
    </Wrapper>
  );
}

export default Welcome;
