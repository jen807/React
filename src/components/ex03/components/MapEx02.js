// import { Fragment } from "react";

// const day = ["월", "화", "수"];

const menu = [
  {
    id: 0,
    day: "월요일",
    mon: "돈까스",
    lun: "마라탕",
    din: "탕수육",
  },

  {
    id: 1,
    day: "화요일",
    mon: "돈까스",
    lun: "마라탕",
    din: "탕수육",
  },

  {
    id: 2,
    day: "수요일",
    mon: "돈까스",
    lun: "짜장면",
    din: "탕수육",
  },
];

export const MapEx02 = () => {
  return (
    <div>
      <>
        {menu.map((week) => (
          <h2 key={week.id}>
            {week.day}
            <br />
            <ul>
              <li>{week.mon}</li>
              <li>{week.lun}</li>
              <li>{week.din}</li>
            </ul>
          </h2>
        ))}
      </>
    </div>
  );
};
