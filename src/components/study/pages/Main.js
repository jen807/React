import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Data } from "../Data";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;

  .logo {
    font-size: 60px;
    font-weight: 300;
  }
`;

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
`;

const Banner = styled.div`
  width: 100%;
  margin-bottom: 100px;
  img {
    width: 100%;
  }
`;

const Con = styled.div`
  width: 400px;
  height: 400px;
  margin-bottom: 100px;
  img {
    width: 100%;
    height: 100%;
  }

  p {
    margin-top: 10px;
  }
`;

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 60px;
  font-weight: 300;
  background-color: white;

  a {
    font-size: 30px;
  }
`;

const Main = () => {
  return (
    <Container>
      <SHeader>
        <Link to="/" className="logo">
          ZARA
        </Link>
        <Link to="/login">LOGIN</Link>
      </SHeader>
      ;
      <Banner>
        <img
          src="https://www.zaraaustralia.com/includes/templates/zaraaustralia/images/zara/banner6d.jpg"
          alt="bannerimg"
        />
      </Banner>
      <ConWrap>
        {Data.map((data) => (
          <Con>
            <img src={data.imgUrl} alt="img" />
            <p>{data.text}</p>
          </Con>
        ))}
      </ConWrap>
    </Container>
  );
};

export default Main;
