import React from "react";
const Count = (props) => {
  const [count, setCount] = React.useState(props.start);
  const addOne = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => this.addOne()}> Add One </button>
    </>
  );
};
export default Count;
