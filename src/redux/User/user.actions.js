import userTypes from "./user.types";
import { auth, handleUserProfile, GoogleProvider } from "../../firebase/utils";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS
});

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    } catch (error) {
      // console.log(error)
    }
  };

export const signUpUser =
  ({ displayName, email, password, confirmPassword }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      const err = ["Passwords don't match"];
      dispatch({
        type: userTypes.SIGN_UP_ERROR,
        payload: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      dispatch({
        type: userTypes.SIGN_UP_SUCCESS,
        payload: true,
      });
    } catch (err) {
      // console.log(err)
    }
  };

export const resetPassword = ({ email }) => async (dispatch) => {
  // Production build notes
  // The url below redirects the user to the login page this will need
  // updating to the live site url in production
    const config = {
      url: "http://localhost:3000/login",
    };

    try {
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          dispatch({
            type: userTypes.RESET_PASSWORD_SUCCESS,
            payload: true
          })
        })
        .catch(() => {
          const err = ["Email not found. Please try again."];
          dispatch({
            type: userTypes.RESET_PASSWORD_ERROR,
            payload: err
          })
        });
    } catch (error) {
      // console.log(error)
    }
  };
  

export const signInWithGoogle = () => async dispatch => {

  try {
    await auth.signInWithPopup(GoogleProvider)
    .then (() => {
      dispatch({
        type: userTypes.SIGN_IN_SUCCESS,
        payload: true,
      });
    })
  } catch (error) {
    // console.log(error)
  }
};

