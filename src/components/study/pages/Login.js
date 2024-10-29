import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginBox = styled.div`
  width: 1500px;
  height: 600px;
  margin: 0 auto;
  margin-top: 150px;
  display: flex;
  justify-content: center;
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

const ImgBox = styled.div`
  width: 400px;
  height: 400px;
`;

const TitleBox = styled.div`
  margin-left: 60px;
  width: 500px;
  height: 500px;
  font-size: 50px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 30px;
  }

  input {
    all: unset;
    width: 500px;
    height: 50px;
    margin-top: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #dbdbdb;
    font-size: 40px;
  }
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  margin-top: 60px;
`;

const Login = () => {
  return (
    <>
      <SHeader>
        ZARA
        <Link to="/login">LOGIN</Link>
      </SHeader>
      <LoginBox>
        <ImgBox>
          <img
            src="https://www.ktnews.com/news/photo/201907/111800_64880_222.jpg"
            alt="#"
          />
        </ImgBox>
        <TitleBox>
          <h3>LOGIN</h3>
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="PASSWORD" />
          <Button>SIGN IN</Button>
        </TitleBox>
      </LoginBox>
    </>
  );
};

export default Login;
