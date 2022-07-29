import Info from "../components/Info";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: Black;
`;

function About() {
  return (
    <Container id="about">
      <Info />
    </Container>
  );
}

export default About;
