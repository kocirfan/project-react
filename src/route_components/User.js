import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {useParams} from "react-router-dom";

 function User() {
  const [loading, setLoading] = useState(true);

   const [user, setUser] = useState({});

   const {id} = useParams();

   useEffect(()=>{
      axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(()=> setLoading(false));
   }, [id]);
   
  return (
    <div>
      <h1>User Details</h1>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user, null, 4)}</code>}
      <br></br>
      <br></br>

      <NavLink to={`/users/${parseInt(id) + 1}`} activeClassName='active'>Next User ({parseInt(id) +1})</NavLink>
    </div>
  )
}
export default User;
