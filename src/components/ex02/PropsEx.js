// import { Contents } from "./components/Contents";
import { Ex } from "./components/Ex";
import "./style.css";

const menus0 = [
  {
    id: 0,
    date: "아침메뉴",
    main: "시리얼",
    sub: "커피",
  },

  {
    id: 1,
    date: "점심메뉴",
    main: "돈까스",
    sub: "요거트",
  },

  {
    id: 2,
    date: "저녁메뉴",
    main: "마라탕",
    sub: "두바이 초콜릿",
  },
];
const menus1 = [
  {
    id: 0,
    date: "아침메뉴",
    main: "알리오올리오",
    sub: "커피",
  },

  {
    id: 1,
    date: "점심메뉴",
    main: "돈까스",
    sub: "요거트",
  },

  {
    id: 2,
    date: "저녁메뉴",
    main: "마라탕",
    sub: "두바이 초콜릿",
  },
];
const menus2 = [
  {
    id: 0,
    date: "아침메뉴",
    main: "국밥",
    sub: "커피",
  },

  {
    id: 1,
    date: "점심메뉴",
    main: "돈까스",
    sub: "요거트",
  },

  {
    id: 2,
    date: "저녁메뉴",
    main: "마라탕",
    sub: "두바이 초콜릿",
  },
];

const PropsEx = () => {
  return (
    <div className="wrap">
      {/* <Contents text="contents 1" bgColor="salmon" />
      <Contents text="contents 2" bgColor="teal" /> */}
      <Ex foodMenus={menus0}></Ex>
      <Ex foodMenus={menus1}></Ex>
      <Ex foodMenus={menus2}></Ex>
    </div>
  );
};

export default PropsEx;
// 매개변수가 뭔지 정확히 기억해두자!!
