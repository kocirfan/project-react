import { useState } from "react";
import {useUser} from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  // console.log(data);
  const [loading, setLoading] = useState(false);

  // login simüle
  const handleChange = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "kocirfan", bio: "lorem ipsum" });
      setLoading(false);
    }, 2000);
  };

  
   // logout simüle
  const handleLogout = () => {
    setUser(null);
  }; 


  return (
    <div>
      {!user && (
        <button onClick={handleChange}>
          {loading ? "loading..." : "Login"}
        </button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>

      <br />
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
