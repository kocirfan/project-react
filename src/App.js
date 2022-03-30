
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import User from './components/User';


// function App() {
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

function App(){
  const [name, setName] = useState("irfan");
  const [age, setAge] = useState(24);
  // state de array ile çalışalım
  const [friends, setFriends] = useState(["Mehmet", "Ali"]);
  // state de obje ile çalışalım
  const [address, setAddress] = useState({ title: "Kayseri", zip: 38111})
  return(
    <div className='App'>
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(18)}>Change Age</button>
      
      <hr />
      <br></br>

      <h2>Friends</h2>
      {friends.map((friend, index)=>(
        <div key={index}>{friend}</div>
      ))}

      <br />
      <button onClick={() => setFriends([...friends, "Ayşe"])}>Add New Friend</button> 

      <hr />
      <br></br>
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      

      <br />
      <button onClick={() => setAddress({title: "İstanbul", zip: "34666"})}>Change Address</button> 

      <br />
      <button onClick={() => setAddress({...address, title: "İstanbul", zip: "34666"})}>Add New Address</button> 

    </div>
  )
  /*return dan önce state'lerimizi belirledik ardından render ettik daha sonra
  component'in bir anında ya da yapılan bir işlemde state değişti(biz bunu butonlarla onClick event'i ile yaptık)
  bu durumda component'imiz tekrar render edildi ve set fonksiyonlarımız çalıştı. */

  /*Array state ile çalışırken dikkat edilmesi gereken durum set fonksiyonunda üç nokta notasyonunu(...arrayname) kullanmak gereklidir */

}

export default App;
