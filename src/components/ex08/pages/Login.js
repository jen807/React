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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  // =>비구조화 할당을 사용하게 되어있음
  // =>레지스터: 등록하다 라는 뜻 폼의 인풋이 누구인지 등록해줌
  // =>required를 메세지라고 보면 된다
  // =>핸들 섭밋 눌렀을때에 대한 이벤트를 처리해줌
  // =>폼에 onsubmit을 걸어서 handlesubmit을 넣어주고 (매개변수)를 써야함
  // =>logsubmit에서 유저들의 데이타가 있는 배열을 받아와서 함수내부에서 처리시킴
  // =>formstate: {errors} (폼상태) 레지스터에서 에러가 발생하면 알아서 처리하게 되어있음

  const nav = useNavigate();

  const loginSubmit = (data) => {
    // console.log(data);
    alert(`${data.username}님 로그인되셨습니다.`);
    nav("/");
  };
  // console.log(isValid);

  return (
    <Container>
      <Form onSubmit={handleSubmit(loginSubmit)}>
        <h2>로그인</h2>
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
        {/* 
*옵셔널 체이닝(?.)
if와는 다르게 객체에게만 접근할 수 있음
객체 속성의 유무에 따라 undefinded로 반환이 아닌 값이 있으면 값을 반환하고
없으면 빈 값으로 반환함 */}
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

        <h5>
          <Link to="/signup">계정이 없으신가요? 회원가입을 해주세요!</Link>
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

// *useForm()
// const {register, handleSubmit, formState{errors, isValid}} = useForm();
// =>register: input 태그 관리
// =>handleSubmit: form 이벤트 관리
// =>formState: form 상태 관리
// =>errors: 에러 관리
// =>isValid: 유효성 판단 후 boolean값으로 반환함
// =>handleSubmit: 내부 커스텀 함수 첫번째 매개변수는 input의 value값을 객체로 저장하여 반환함

export default Login;
