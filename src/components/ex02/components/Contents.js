export const Contents = ({ text, bgColor }) => {
  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
};
