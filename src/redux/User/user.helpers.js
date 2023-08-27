import { auth } from "../../firebase/utils";

export const handleResetPasswordAPI = (email) => {
  // Production build notes
  // The url below redirects the user to the login page this will need
  // updating to the live site url in production
  const config = {
    url: "http://localhost:3000/login",
  };

  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
				resolve();
      })
      .catch(() => {
        const err = ["Email not found. Please try again."];
				reject(err)
      });
  });
};
