import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserAdding() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    date: "",
    gender: "",
    phoneNumber: "",
    avatar: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  function handleSubmit() {
   dispatch(addUser(user));
    setUser(userAdded);
    alert(`Create user ${JSON.stringify(user)} successfully!!!`);
    navigate("/");
  }

  function getBackUserList() {
    navigate("/");
  }

  return (
    <div>
      <h1>User Add</h1>
      <form>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        {/* Add other user input fields similarly */}
        <button type="button" onClick={getBackUserList}>
          Back
        </button>
        &nbsp;
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}
