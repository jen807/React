export const Ex = ({ foodMenus }) => {
  return (
    <div className="Menu">
      <h2>{foodMenus[0].date}</h2>
      메인메뉴: {foodMenus[0].main}
      <br />
      서브메뉴: {foodMenus[0].sub}
      <br />
      <br />
      <h2>{foodMenus[1].date}</h2>
      메인메뉴: {foodMenus[1].main}
      <br />
      서브메뉴: {foodMenus[1].sub}
      <br />
      <br />
      <h2>{foodMenus[2].date}</h2>
      메인메뉴: {foodMenus[2].main}
      <br />
      서브메뉴: {foodMenus[2].sub}
    </div>
  );
};

// =>p태그를 써서 간격을 한번 주면 br을 두번 안써도 됨!! 확인해두기
