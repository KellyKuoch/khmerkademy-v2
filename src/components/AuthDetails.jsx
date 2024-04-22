import { useEffect, useState } from "react";
import { auth } from "../firebase";
import "./AuthDetails.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log(user);
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
    <div className="profile-main">
      <div className="profile-detail-container">
        <div className="left-profile">
          {authUser ? (
            <>
              <img src="./img/github-pf.png" className="profile-pic" alt="" />
              <p>
                <strong>Email:</strong> {authUser.email}
              </p>
              <button className="button-8" onClick={userSignOut}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <p>Signed Out</p>
              <button className="button-8" onClick={() => navigate("/signup")}>
                Sign In
              </button>
            </>
          )}
        </div>
        <div className="right-profile">
          <div className="profile-progress">
            <h3>Profile Progress</h3>
            <div className="unit-progress">
              <div className="unit-1">
                <p>Unit 1</p>
              </div>
              <div className="unit-2">
                <p>Unit 2</p>
              </div>
              <div className="unit-3">
                <p>Unit 3</p>
              </div>
              <div className="unit-4">
                <p>Unit 4</p>
              </div>
            </div>
          </div>
          <div className="setting">
            <h3>Setting</h3>
            <div className="dark-mode">
              <p>Dark Mode</p>
            </div>
          </div>
          <div className="profile-detail">
            <h3>Profile detail</h3>
            <p>
              {/* <strong>A user since: </strong> {authUser.metadata.creationTime} */}
              <strong>User since: </strong> April 21, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDetails;
