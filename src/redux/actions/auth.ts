// import { axios } from "../../utils";
import { Dispatch } from "../types";
import { baseUrl, axios } from "../../utils";

export const login =
  ({ data }: any) =>
    async (dispatch: Dispatch) => {
      try {
        dispatch({ type: "LOGIN_PENDING" });

        const url = `${baseUrl?.API_URL}auth/login`;
        let response: any = await axios.Post({
          url,
          data: { ...data },
        });

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            data: response.login,
          },
        });
        localStorage.setItem("token", "success");
        window.location.reload();
      } catch (error: any) {
        console.log({ error });
        if (error) {
          alert(error.message);
          dispatch({ type: "LOGIN_ERROR" });
        }
      }
    };


export const getKota = async () => {
  try {
    return new Promise(resolve => {
      const url = `${baseUrl?.API_URL}api/IDD3834/data/S0/attribute`
      const response = async () => {
        await axios.Get({
          url
        })
      };
      resolve(response);
    })
  } catch (error) {
    console.log(error);
  }
}

export const handleLogout = () => async (dispatch: Dispatch) => {
  dispatch({ type: "HANDLE_LOGOUT" });
  localStorage.removeItem("token");
  window.location.reload();
};
