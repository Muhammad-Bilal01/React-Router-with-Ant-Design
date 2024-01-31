import { useEffect } from "react";

function Counter({ count }) {
  useEffect(() => {
    console.log("Conter Testing");

    // jb compoent khatam  ho jaye
    return () => {
      console.log("Counter mar gaya");
    };
  }, []);
  return (
    <>
      <h1>Counter: {count}</h1>
    </>
  );
}
export default Counter;
