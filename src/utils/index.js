import axios from "axios";

export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;
  if (userRoles.includes("admin")) return true;

	return false;
};

// The api baseUrl is the locally hosted address which would be updated to the deployed version
// in production

export const apiInstance = axios.create({
  baseURL: 'http://127.0.0.1:5001/reactshop-baf45/us-central1/api'
});
