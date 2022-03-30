
import './App.css';
import Header from './components/Header';
import User from './components/User';


function App() {
  return (
    <div>
      <h1>Burası App</h1>
      <Header />
      <User
       name="İrfan" 
       surname="Koçaksoy"
       age="24"
       isLoggedIn={true}
       friends={['Umur', 'Mehmet', 'Nurullah']}
       address={{
         title: 'Talas/Kayseri',
         zip: 38280
       }}


      ></User>
    </div>
  );
   
}

export default App;
