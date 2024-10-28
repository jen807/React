import { useForm } from "react-hook-form";
import styled from "styled-components";

const Sdiv = styled.div`
  width: 300px;
  height: 400px;
  margin: 50px auto;
  background-color: lightgray;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 800;
  }

  input {
    all: unset;
    width: 100%;
    height: 40px;
    background-color: white;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: rgba(255, 0, 0, 0.5);
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 40px;
    background-color: #666;
    color: white;
    margin-top: 30px;
    border-radius: 5px;
  }
`;

const Ex08 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
  };
  //   console.log(errors.username.message);
  return (
    <Sdiv>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <h2>로그인</h2>

        <input
          {...register("username", {
            required: "아이디는 필수입니다.",
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
            required: "비밀번호는 필수입니다.",
          })}
          type="password"
          placeholder="패스워드"
        />
        <p>{errors?.password?.message}</p>

        <button>로그인</button>
      </form>
    </Sdiv>
  );
};

export default Ex08;
