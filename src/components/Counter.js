// import { useState, useEffect } from "react";

// function Counter() {
//   const [number, setNumber] = useState(0);
//   const [name, setName] = useState("irfan");

//   useEffect(() => {
//     console.log("Component mount edildi");

//     const interval = setInterval(() => {
//       setNumber((n) => n + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     console.log("Number state güncellendi");
//   }, [number]);

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>Click</button>
//     </div>
//   );
// }
// export default Counter;
