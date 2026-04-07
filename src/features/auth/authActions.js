import { setError, setUser } from "@/store/authSlice";
import { loginUser } from "./userService";

export const login = (email, password) => async (dispatch) => {
  try {
    const user = await loginUser(email, password);
    dispatch(setUser(user));
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
