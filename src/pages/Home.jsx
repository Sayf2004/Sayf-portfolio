import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import styled from "styled-components";
import Image from "../components/Image";

const First = styled.div`
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
`;

function Home() {
  return (
    <>
      <First>
        <Navbar />
        <Welcome />
        <Image />
      </First>
    </>
  );
}

export default Home;
