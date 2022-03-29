import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.scss";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const toggleAuthState = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  const actionIsLoading = <p>Sending request...</p>;
  const actionIsNotLoading = (
    <button>{isLogin ? "Login" : "Create New Account"}</button>
  );

  return (
    <section className={classes.auth}>
      <h1> {isLogin ? "Login" : "Sign up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Enter your email</label>
          <input type="email" id="email" required />
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Enter your password</label>
          <input type="password" id="password" required />
        </div>

        <div className={classes.actions}>
          {/* {isLoading && <p>Sending request...</p>}
          {isLoading && (
            <button>{isLogin ? "Login" : "Create New Account"}</button>
          )}  */}
          {isLoading ? actionIsLoading : actionIsNotLoading}
          <button className={classes.toggle} onClick={toggleAuthState}>
            {isLogin ? "Create New Account" : "Login with an existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
