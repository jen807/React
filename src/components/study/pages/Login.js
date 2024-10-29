import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Form = styled.form`
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
  padding-left: 100px;
  padding-right: 100px;
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

  img {
    margin-bottom: 10px;
  }

  .signup {
    color: black;
  }
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
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    color: rgba(255, 0, 0, 0.5);
  }
`;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  margin-top: 60px;
  color: ${(props) => (props.$isValid ? "black" : "#999")};
  cursor: ${(props) => (props.$isValid ? "pointer" : "default")};
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const nav = useNavigate();

  const loginSubmit = (data) => {
    alert(`${data.username}님 로그인 되셨습니다.`);
    nav("/");
  };

  return (
    <>
      <SHeader>
        ZARA
        <Link to="/login">LOGIN</Link>
      </SHeader>
      <Form onSubmit={handleSubmit(loginSubmit)}>
        <ImgBox>
          <img
            src="https://www.ktnews.com/news/photo/201907/111800_64880_222.jpg"
            alt="#"
          />
          <Link to="/signup" className="signup">
            If you don't have account, click here for sign up
          </Link>
        </ImgBox>
        <TitleBox>
          <h3>LOGIN</h3>
          <input
            type="text"
            placeholder="ID"
            {...register("username", { required: "아이디는 필수입니다" })}
          />
          <p>{errors?.username?.message}</p>

          <input
            type="password"
            placeholder="PASSWORD"
            {...register("password", { required: "패스워드는 필수입니다" })}
          />

          <p>{errors?.password?.message}</p>
          <Button type="submit" $isValid={isValid}>
            SIGN IN
          </Button>
        </TitleBox>
      </Form>
    </>
  );
};

export default Login;
