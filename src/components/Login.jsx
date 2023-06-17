import React from "react";

import '../styles/login.css'

const Login = (props) => {
  return (
    <>
      <div className="signup" ref={props.wrap}>
        <form name="form" action="#">
          <p className="login-text">Login</p>
          <div className="user--data">
            First Name:
            <input
              type="text"
              className="input first--name"
              required
              ref={props.firstname}
            />
          </div>
          <div className="user--data">
            Last Name:
            <input
              type="text"
              className="input last--name"
              required
              ref={props.lastname}
            />
          </div>
          <div className="user--data">
            Nickname:
            <input
              type="text"
              className="input nickname"
              required
              ref={props.nickname}
            />
          </div>
          <br />
          <button
            type="submit"
            className="submitForm"
            onClick={(e) =>
              props.func(
                e,
                props.firstname,
                props.lastname,
                props.nickname,
                props.overlay,
                props.wrap
              )
            }
          >
            Login
          </button>
        </form>
      </div>
      <div
        className="overlay"
        ref={props.overlay}
      ></div>
    </>
  );
};

export default Login;
