import axios from "axios";

const USER_MANAGEMENT_API = "http://localhost:8080/api/users";

export const getActiveUsers = async () => {
  let response = null;
  try {
    response = await axios.get(`${USER_MANAGEMENT_API}`);
  } catch (error) {
    console.error("Get active users API error:", error);
    throw error;
  }
  return response;
};

export const getDeletedUsers = async () => {
  try {
    const response = await axios.get(`${USER_MANAGEMENT_API}/remove-user`);
    return response.data;
  } catch (error) {
    console.error("Get deleted users API error:", error);
    throw error;
  }
};

export const lockUserAccount = async (userId) => {
  try {
    const response = await axios.post(`${USER_MANAGEMENT_API}/${userId}/lock`);
    return response;
  } catch (error) {
    console.error("Lock user account API error:", error);
    throw error;
  }
};

export const unlockUserAccount = async (userId) => {
  try {
    const response = await axios.post(
      `${USER_MANAGEMENT_API}/${userId}/unlock`
    );
    return response;
  } catch (error) {
    console.error("Unlock user account API error:", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${USER_MANAGEMENT_API}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Delete user API error:", error);
    throw error;
  }
};

export const registerUser = async (userDTO) => {
  try {
    const response = await axios.post(
      `${USER_MANAGEMENT_API}/register`,
      userDTO
    );
    return response.data;
  } catch (error) {
    console.error("Register user API error:", error);
    throw error;
  }
};

