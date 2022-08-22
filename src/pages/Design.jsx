import styled from "styled-components";
import { device } from "../device";
import DesignTitle from "../components/DesignTitle";

const Div = styled.div`
  height: 100vh;
  @media ${device.tablet} {
    margin-top: 40px;
  }
`;

function Design() {
  return (
    <Div id="work">
      <DesignTitle />
    </Div>
  );
}

export default Design;
