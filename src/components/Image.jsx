import styled from "styled-components";
import { device } from "../device";

const Div = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  @media ${device.mobileL} {
    display: flex;
  }
`;
const Img = styled.img`
  width: 250px;
  border-radius: 15px;
`;

function Image() {
  return (
    <Div>
      <Img src="//i.imgur.com/WW7r0p1.jpg" alt="" />
    </Div>
  );
}

export default Image;
