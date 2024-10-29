import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 80px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;

  h2 {
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: -2px;
    margin-bottom: 50px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px;
    box-sizing: border-box;
    /* &::placeholder {
      color: red;
    } */
  }

  p {
    margin-bottom: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    color: crimson;
  }

  h5 {
    text-align: center;
    font-size: 14px;
    color: #666;
  }
`;

const Button = styled.button`
  all: unset;
  height: 50px;
  width: 100%;
  background-color: cornflowerblue;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: white;
  font-weight: 500;
  cursor: ${(props) => props.$ispointer};
  opacity: ${(props) => props.$isActive};
`;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const nav = useNavigate();

  const SignupSubmit = (data) => {
    // if (data) {
    //   nav("/login");
    // }

    alert(`${data.username}님 회원가입 되셨습니다.`);
    nav("/login");

    // console.log(data);
  };
  // console.log(isValid);

  return (
    <Container>
      <Form onSubmit={handleSubmit(SignupSubmit)}>
        <h2>회원가입</h2>
        <input
          {...register("username", {
            required: "아이디는 필수입니다.",
            minLength: {
              value: 2,
              message: "아이디는 최소 2자리 이상이어야 합니다.",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <p>{errors?.username?.message}</p>
        <input
          {...register("name", {
            required: false,
          })}
          type="password"
          placeholder="이름"
        />
        <p>{errors?.name?.message}</p>
        <input
          {...register("password", {
            required: "패스워드는 필수입니다.",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
              message: "영문 숫자 특수기호 조합 8자리 이상",
            },
          })}
          type="password"
          placeholder="패스워드"
        />

        <p>{errors?.password?.message}</p>

        <input
          {...register("email", {
            required: false,
            // =>필수가 아니라면 false로 처리해주기
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              message: "이메일 형식에 따라 정확히 입력해주세요",
            },
          })}
          type="text"
          placeholder="Example@naver.com"
        />
        <p>{errors?.email?.message}</p>

        <h5>
          <Link to="/login">계정이 있으신가요? 로그인을 해주세요!</Link>
        </h5>

        <Button
          $isActive={isValid ? "1" : "0.5"}
          $isPointer={isValid ? "pointer" : "default"}
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
