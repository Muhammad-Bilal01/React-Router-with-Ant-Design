import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import { Row, Col } from "antd";
import AppRouter from "./Router";

function App() {
  return <AppRouter />;
}

// ------------------------------------------------------------

// function App() {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState();
//   const [name, setName] = useState("Bilal");

//   // UseEffect
//   // useEffect(callback function,dependency array)

//   // Run after Ui rendering
//   useEffect(() => {
//     console.log("testing 1....");
//   }, []); // run only one time when component mount

//   useEffect(() => {
//     console.log("testing 2....");
//   }); // run everytime when component is update and also first time

//   useEffect(() => {
//     console.log("Testing 3....");
//   }, [count]); // first time + jb count update hoga

//   // run before ui rendering
//   useLayoutEffect(() => {
//     console.log("Before Ui");
//   }, []);

//   return (
//     <div className="App">
//       <h1>{name}</h1>
//       <button
//         onClick={() => {
//           setName("Ahmed");
//         }}
//       >
//         Update Name
//       </button>
//       {
//         count < 10 && <Counter count={count} />
//         // jese hi counter greater than 10 hu component khatam kr du
//       }
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }

export default App;
