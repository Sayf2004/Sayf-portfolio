import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import styled from "styled-components";

const First = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

function Home() {
  return (
    <>
      <First>
        <Navbar />
        <Welcome />
      </First>
    </>
  );
}

export default Home;
