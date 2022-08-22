import styled from "styled-components";
import { device } from "../device";

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 80%;
  transform: scale(0.7);
  @media ${device.tablet} {
    transform: scale(1.2);
  }
`;

function DesignTitle() {
  return (
    <ImgContainer>
      <Img src="https://i.imgur.com/PbOaOyJ.jpg" alt="Design" />
    </ImgContainer>
  );
}

export default DesignTitle;
