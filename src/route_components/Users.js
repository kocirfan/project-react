import axios from "axios";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Switch , useRouteMatch} from "react-router-dom";
import {NavLink} from "react-router-dom";
import User from "./User";


function Users() {
  const [loading, setLoading] = useState(true);
  const[users, setUsers] = useState([]);

  const {path, url} = useRouteMatch();
  console.log(path, url);

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .finally(()=> setLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {loading && <div className="loader">Loading...</div>}
      <ul>
        {users.map((user) =>(
          <li key={user.id}>
            <NavLink to={`${url}/${user.id}`} activeClassName='active'>{user.name}</NavLink>
            </li>
        ))} 
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a User</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}>

        </Route>
        </Switch>
    </div>
  )
}
export default Users;