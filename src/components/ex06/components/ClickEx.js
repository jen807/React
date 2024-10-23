import { useState } from "react";

const ClickEx = () => {
  const [num, setNum] = useState(0);
  //   =>useState는 리액트 상태관리 hook (앞에 use가 붙으면 hook)
  //   =>배열 비구조화 할당을 동하여 사용하며 반드시 import해서 사용(react 자체에 내장되어있음)
  //   =>const [변수명, set변수명] = useState(초기화 값);

  // =>업데이트를 시키기 위해서 배열 비구조할당
  // =>두번째 요소중 첫번째가 변수명, 뒤의 것은 set+변수명
  // =>useState는 첫번째 변수의 기본값을 설정함
  // =>클릭 이벤트를 걸었을때 업데이트 시켜주기 위해서 setnum메서드를 사용함

  //   const onPlus = () => setNum(num + 1);
  //   =>uset state에 정의된 변수값을 변경할때 사용
  //   =>set변수명(변경할 값);
  //   };

  const onMinus = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(num * 0);
  };

  return (
    <div>
      <h3>클릭할때 숫자 증가</h3>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={onMinus}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ClickEx;
