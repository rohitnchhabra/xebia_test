import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from "../action/types";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "Luke Skywalker" && password === "19BBY") {
      dispatch({ type: actionTypes.LOGGED_IN });
      history.push("/search");
    } else {
      setError("Invalid Login");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="mt-5 offset-md-4 col-md-4">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
