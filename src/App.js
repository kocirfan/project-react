import "./App.css";
import React from "react";

 
// import Header from './components/Header';
// import User from './components/User';
// import Counter from './components/Counter';
//import Users from './components/Users';
// import {BrowserRouter as Router,  Switch, Route, NavLink} from "react-router-dom";
// import Home from "./route_components/Home";
// import About from "./route_components/About";
// import Users from "./route_components/Users";
// import Error404 from "./route_components/Error404";
//import Signup from "./components/Signup";
//import { useState, useMemo, useCallback } from 'react';
//import Header from "./Memoization/Header";
import {ThemeProvider} from "./context/ThemeContext";
import {UserProvider} from "./context/UserContext";

import Container from "./componentContext/Container";

// *** Context*** 


function App(){
  return  (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
    
     
}
export default App;




























// --------------------------------------------------
// MEMOİZATİON 

//  //***useCallback */
//  function App() {
//   const [number, setNumber] = useState(0);

//   //***useCallback */
//   const increment = useCallback(()=>{
//     setNumber((prevState) => prevState + 1);
//   }, []);
//   return (
//     <div className="App">
//       <Header increment={increment} />
//       <hr/>
//       <h1>{number}</h1>
      

//     </div>
//   )
// }
// export default App;


//--------------------------------------------------
// ********* react.memo / usememo ***********
// function App() {
//   const [number, setNumber] = useState(0);

   // react.memo / usememo
//   const data = useMemo(() =>{
//     return calculeObject(number)
//   }, [number]);

//   return (
//     <div className="App">
//       <Header data={data}/>

//       <hr/>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number +1)}>Click</button>

//       <br></br>
//       <br></br>

//     </div>

//   )
// }

// export default App;

// function calculeObject(number){
//   console.log('calculating...');
//   for(let i=0; i<10000; i++){}
//   console.log('calculated');
//   return {name: "irfan", number};
  
// }
// --------------------------------------------------

// Formik yup ve validation kontrol 
// function App() {
//   return (
//     <div className="App">
      
//       <Signup />
//     </div>
//   );
// }
// export default App;
// ----------------------------------------------------
//* Routes**

// function App(){
//   return (
//   <Router>
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/" exact activeClassName='active'>Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" activeClassName='active'>about</NavLink>
//           </li>
//           <li>
//             <NavLink to="/users" activeClassName='active'>Users</NavLink>
//           </li>
//         </ul>
//       </nav>

//       <Switch>
//           <Route path="/" exact component={Home}/>
//           <Route path="/about" component={About}/>
//           <Route path="/users" component={Users}/>
//           <Route path="*" component={Error404}/>

//       </Switch>
//     </div>
//   </Router>
//   );

// }

// export default App;
//-------------------------------------------------------------

/* //// function App() {
//   return (
//     <div>
//       <h1>Burası App</h1>
//       <Header />
//       <User
//        name="İrfan" 
//        surname="Koçaksoy"
//        age="24"
//        isLoggedIn={true}
//        friends={['Umur', 'Mehmet', 'Nurullah']}
//        address={{
//          title: 'Talas/Kayseri',
//          zip: 38280
//        }}


//       ></User>
//     </div>
//   );
   
// }

// ** state işlemi için oluşturalım **

// function App(){
//   const [name, setName] = useState("irfan");
//   const [age, setAge] = useState(24);
//   // state de array ile çalışalım
//   const [friends, setFriends] = useState(["Mehmet", "Ali"]);
//   // state de obje ile çalışalım
//   const [address, setAddress] = useState({ title: "Kayseri", zip: 38111})
//   return(
//     <div className='App'>
//       <h1>Merhaba {name}</h1>
//       <h2>{age}</h2>

//       <button onClick={() => setName("Ahmet")}>Change Name</button>
//       <button onClick={() => setAge(18)}>Change Age</button>
      
//       <hr />
//       <br></br>

//       <h2>Friends</h2>
//       {friends.map((friend, index)=>(
//         <div key={index}>{friend}</div>
//       ))}

//       <br />
//       <button onClick={() => setFriends([...friends, "Ayşe"])}>Add New Friend</button> 

//       <hr />
//       <br></br>
//       <h2>Address</h2>
//       <div>
//         {address.title} {address.zip}
//       </div>
      

//       <br />
//       <button onClick={() => setAddress({title: "İstanbul", zip: "34666"})}>Change Address</button> 

//       <br />
//       <button onClick={() => setAddress({...address, title: "İstanbul", zip: "34666"})}>Add New Address</button> 

//     </div>
//   )
//   /*return dan önce state'lerimizi belirledik ardından render ettik daha sonra
//   component'in bir anında ya da yapılan bir işlemde state değişti(biz bunu butonlarla onClick event'i ile yaptık)
//   bu durumda component'imiz tekrar render edildi ve set fonksiyonlarımız çalıştı. */

//   /*Array state ile çalışırken dikkat edilmesi gereken durum set fonksiyonunda üç nokta notasyonunu(...arrayname) kullanmak gereklidir */

// }

// export default App;

// Lifecycle ***useEffect****
// function App(){

// // const [isVisible, setIsVisible] = useState(true);
//   // useEffect(()=>{
//   //   console.log('State güncellendi');
//   // });

//   return(
//   //  <div className='App'>
//   //    {isVisible && <Counter />}

//   //   <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
//   //  </div>
//     <div className='App'>
//         <Users />
//     </div>
//   )
// }
// export default App;
