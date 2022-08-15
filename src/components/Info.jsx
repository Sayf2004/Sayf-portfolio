import styled from "styled-components";
import { device } from "../device";

const Container = styled.div`
  width: 100%;
  display: flex;
  color: white;
  padding: 5% 10%;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 49.9%;
  @media ${device.tablet} {
    width: 100%;
  }
`;
const Title = styled.div`
  margin-bottom: 25px;
`;

const Bold = styled.span`
  font-weight: 800;
`;
const Desc1 = styled.div`
  margin-bottom: 25px;
`;
const Desc2 = styled.div``;

const Right = styled.div`
  position: relative;
  display: flex;
  width: 49.9%;
  @media ${device.tablet} {
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40vh;
    background-color: black;
  }
`;

const Card1 = styled.div`
  position: absolute;
  z-index: 0;
  margin-left: 165px;
  width: 225px;
  height: 300px;
  background-color: #a6d5ff;
`;

const Card2 = styled.div`
  position: absolute;
  margin-top: 40px;
  margin-left: 130px;
  z-index: 1;
  width: 225px;
  height: 300px;
  background-color: #8ac8ff;
`;
const Card3 = styled.div`
  position: absolute;
  margin-top: 80px;
  margin-left: 95px;
  z-index: 2;
  width: 225px;
  height: 300px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Info() {
  return (
    <Container>
      <Left>
        <Title>
          Hello There, <Bold>I'm Sayf</Bold>. A High School Student based in
          Sfax, Tunisia
        </Title>
        <Desc1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          varius massa cursus laoreet suspendisse ac nisl in pulvinar. Auctor
          integer pellentesque nunc ut at penatibus{" "}
        </Desc1>
        <Desc2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
          varius massa cursus laoreet suspendisse ac nisl in pulvinar. Auctor
          integer pellentesque nunc ut at penatibus viverra risus nisl. Sapien
          nibh interdum tellus sapien et tortor, commodo. Dolor urna pharetra,
          nulla et morbi sed ornare. Sed condimentum urna pharetra id in enim
          nunc. Mi ut etiam vel.
        </Desc2>
      </Left>
      <Right>
        <Card1></Card1>
        <Card2></Card2>
        <Card3>
          <Img src="https://i.imgur.com/As1PcHa.jpg" alt="Me Pic" />
        </Card3>
      </Right>
    </Container>
  );
}

export default Info;
