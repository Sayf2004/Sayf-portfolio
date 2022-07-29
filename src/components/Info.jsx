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
const Right = styled.div`
  width: 49.9%;
`;
const Desc1 = styled.div`
  margin-bottom: 25px;
`;
const Desc2 = styled.div``;

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
      <Right></Right>
    </Container>
  );
}

export default Info;
