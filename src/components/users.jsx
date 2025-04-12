import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);
  const navigate = useNavigate();

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
            <button
              onClick={() => navigate(`/users/user/${user.login}`)}
              className="view-btn"
            >
              View User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBBadw1m0Zjr8OKYSeQMVZq55n3rLugtE8",
//   authDomain: "reactvan7.firebaseapp.com",
//   projectId: "reactvan7",
//   storageBucket: "reactvan7.firebasestorage.app",
//   messagingSenderId: "667680504104",
//   appId: "1:667680504104:web:ada162512bc08a0b3fb81d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);