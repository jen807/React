import { useState } from "react";
import styled from "styled-components";

const colors = "lightgray";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$color};
`;

const Event = () => {
  const [bgColor, setBgColor] = useState("lightgray");
  const [on, setOn] = useState(true);

  const colorChnage = () => {
    // if (bgColor === "lightgray") {
    //   setBgColor("cornflowerblue");
    // } else if (bgColor === "cornflowerblue") {
    //   setBgColor("lightgray");
    // } => 하나의 useState와 조건문 사용해서 하는 법

    setBgColor("cornflowerblue");
    if (on) {
      setBgColor("cornflowerblue");
      setOn(false);
    } else if (!on) {
      setBgColor("lightgray");
      setOn(true);
    }
    // => 두개의 useState와 조건문 사용해서 하는 법
    // =>숫자를 이용해서 바꿔보기
  };

  return (
    <div>
      <Box $color={bgColor} onClick={colorChnage}></Box>
    </div>
  );
};

export default Event;
