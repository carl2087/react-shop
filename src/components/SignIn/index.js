import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import Button from "../Forms/Button";
import { signInWithGoogle, auth } from "../../firebase/utils";
import FormInput from "../Forms/FormInput";
import AuthWrapper from "../AuthWrapper";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      // console.log(error)
    }
  };

  const configAuthWrapper = {
    headline: "LogIn",
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">Login</Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
          </div>

          <div className="links">
            <NavLink to={"/recovery"}>Reset Password</NavLink>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
