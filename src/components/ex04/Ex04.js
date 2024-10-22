import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  /* props라는 객체안의 속성을 가져온다 */
  border-radius: 50%;
`;

const InBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightgray;
`;

const BoxAni = keyframes`
0%{
    transform: rotate(0);
}
100%{
    border-radius: 50%;
    transform: rotate(360deg);
}
`;

const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: pink;
  div {
    width: 100px;
    height: 100px;
    background-color: hotpink;
  }

  &:hover div {
    background-color: deeppink;
    animation: ${BoxAni} 1s infinite;
  }
  animation: ${BoxAni} 2s infinite alternate;
`;

const Ex04 = () => {
  return (
    <div>
      <Box $bgColor="salmon">
        <InBox></InBox>
      </Box>

      <Box $bgColor="lightsalmon"></Box>

      <Con>
        <div></div>
      </Con>
    </div>
    // =>props 사용시 $앞에 붙이기
  );
};

export default Ex04;
