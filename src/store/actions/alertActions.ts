import { SET_ALERT } from "./action.types"

export const setAlert = (message: string): AlertAction => {
  return {
    type: SET_ALERT,
    payload: message,
  }
}