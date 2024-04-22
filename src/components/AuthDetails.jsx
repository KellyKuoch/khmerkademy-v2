import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h3>Detail</h3>
      <h3>Detail</h3>
      <h3>Detail</h3>
      <h3>Detail</h3>
      <h3>Detail</h3>
      <div>
        {authUser ? (
          <>
            <p>Signed In as {authUser.email}</p>
            <button onClick={userSignOut}>Sign Out</button>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    </div>
  );
};

export default AuthDetails;