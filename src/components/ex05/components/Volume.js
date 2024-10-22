import styled from "styled-components";
import { faVolumeOff, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SVolume = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .progress {
    height: 7px;
  }
`;

const Volume = () => {
  return (
    <SVolume>
      <FontAwesomeIcon icon={faVolumeOff} />
      <div className="progress">
        <div className="bar"></div>
      </div>
      <FontAwesomeIcon icon={faVolumeHigh} />
    </SVolume>
  );
};

export default Volume;
