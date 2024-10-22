import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const STitleWrap = styled.div`
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
`;

const SMore = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: crimson;
`;

const TitleWrap = () => {
  return (
    <STitleWrap>
      <h3>Betthoven:Piano Concerto No.1</h3>
      <SMore>
        <FontAwesomeIcon icon={faEllipsis} />
      </SMore>
    </STitleWrap>
  );
};

export default TitleWrap;
