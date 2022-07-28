import styled from "styled-components";
import { device } from "../device";

const Wrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  padding: 5% 10%;
`;

const Container = styled.div``;

const TextUp = styled.h2`
  font-weight: 400;
  font-size: 32px;
  margin-bottom: -10px;
`;
const TextMid = styled.h2`
  font-weight: 400;
  font-size: 32px;
`;
const TextBold = styled.span`
  color: #007fef;
  font-weight: 700;
  font-size: 48px;
`;
const TextBot = styled.span`
  font-size: 22px;
`;

function Welcome() {
  return (
    <Wrapper>
      <Container>
        <TextUp>Hi, I'm Sayf Ketata.</TextUp>
        <TextMid>
          <TextBold>A High School Student</TextBold> based in Sfax,Tunisia
        </TextMid>
        <TextBot>
          Raising Senior, <b>Pioneer Highschool of Sfax</b>
        </TextBot>
      </Container>
    </Wrapper>
  );
}

export default Welcome;
