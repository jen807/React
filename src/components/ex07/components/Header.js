import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
  background-color: lightgray;

  ul {
    max-width: 500px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = () => {
  return (
    <SHeader>
      <ul>
        <li>
          <Link to="/">메인 페이지</Link>
        </li>

        <li>
          <Link to="/sub/0">1번 서브 페이지</Link>
        </li>

        <li>
          <Link to="/sub/1">2번 서브 페이지</Link>
        </li>
      </ul>
    </SHeader>
  );
};

export default Header;
