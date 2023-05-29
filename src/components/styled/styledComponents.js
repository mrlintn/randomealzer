import styled from "styled-components";
import background from "../../assets/background.jpg";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: inherit;
  height: 210px;
  right: 0;
  left: 0;
  padding: 1em;
`;
export { Overlay };

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0px;
  background-image: url(${background});
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
`;
export { Background };

const DayLabel = styled.div`
  text-align: center;
  background-color: white;
  opacity: 0.8;
`;
export { DayLabel };
