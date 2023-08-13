import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import Button from "../Forms/Button";
import { signInWithGoogle, auth } from "../../firebase/utils";
import FormInput from "../Forms/FormInput";
import AuthWrapper from "../AuthWrapper";

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (error) {
      // console.log(error)
    }
  };

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
		const configAuthWrapper = {
			headline: 'LogIn'
		};

    return (
			<AuthWrapper {...configAuthWrapper}>
          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email"
                handleChange={this.handleChange}
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                handleChange={this.handleChange}
              />

              <Button type="submit">Login</Button>

              <div className="socialSignin">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>

              <div className="links">
                <NavLink to={'/recovery'}>
                  Reset Password
                </NavLink>
              </div>

            </form>
          </div>
			</AuthWrapper>
    );
  }
}

export default SignIn;
