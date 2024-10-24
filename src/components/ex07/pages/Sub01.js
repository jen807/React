import { useParams } from "react-router-dom";

const subPageData = [
  {
    id: 0,
    title: "SUB 01",
    desc: "첫번째 서브페이지",
  },

  {
    id: 1,
    title: "SUB 02",
    desc: "두번째 서브페이지",
  },
];

const Sub01 = () => {
  const { id } = useParams();

  // =>router 경로 중 변수 값을 얻어옴
  // =>객체로 반환됨
  // =>객체 비구조화 할당 이용할 수 있음

  return (
    <div>
      <h2>{subPageData[id].title}</h2>
      <p>{subPageData[id].desc}</p>
      {/* <h2>{subPageData[params.id].title}</h2>
      <p>{subPageData[params.id].desc}</p> */}
    </div>
  );
};

export default Sub01;
