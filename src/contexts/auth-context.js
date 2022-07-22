import { createContext, useReducer } from "react"
import { default as axios } from "axios"

export const authContext = createContext({
  state: {},
  dispatch: () => {},
})

const { Provider } = authContext

export const actions = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
}

const authReducer = async (state, action) => {
  switch (action.type) {
    case actions.REGISTER:
      const {
        data: { token, user },
        status,
      } = await axios.post("/api/users/register", {
        ...action.payload,
      })
      if (status === 200) {
        console.log(user, "\n\n" + token, state)
        return { ...state, user, token }
      }
      return state
    case actions.LOGIN:
      break
    case actions.LOGOUT:
      break
    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    token: null,
    user: null,
    error: null,
  })

  return <Provider value={{ dispatch, state }}>{children}</Provider>
}

export default AuthContextProvider
