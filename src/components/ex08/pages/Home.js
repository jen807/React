import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h5>
        <Link to="/login">계정이 있으신가요? 로그인을 해주세요!</Link>
      </h5>
      <h5>
        <Link to="/signup">계정이 없으신가요? 회원가입을 해주세요!</Link>
      </h5>
    </div>
  );
};

export default Home;
