import React, { useState, useCallback, useContext, memo, useRef } from "react"
import { Container, Form, Label, Input, Button } from "reactstrap"
import { actions, authContext } from "../contexts/auth-context"

const LogIn = () => {
  const { dispatch, state } = useContext(authContext)
  const [error, setError] = useState(null)
  const mobileRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      console.log("registering user...")
      if (!mobileRef.current.value || !passwordRef.current.value) {
        setError("Enter Mobile no. and Password.")
      }
      if (mobileRef.current.value && passwordRef.current.value) {
        dispatch({
          type: actions.REGISTER,
          payload: {
            username: mobileRef.current.value,
            password: passwordRef.current.value,
          },
        })
      }
    },
    [dispatch]
  )

  return (
    <Container fluid>
      <h2>{state.token || "No token."}</h2>
      {error && <h4>{error}</h4>}
      <Form onSubmit={handleSubmit}>
        <Label>Mobile No.</Label>
        <Input
          type="text"
          placeholder="0123456789"
          maxLength={13}
          minLength={10}
          innerRef={mobileRef}
          className={"mb-2"}
        />
        <Input
          type="password"
          placeholder="0123456789"
          maxLength={8}
          minLength={4}
          innerRef={passwordRef}
          className={"mb-2"}
        />
        <Button type="submit">LogIn</Button>
      </Form>
    </Container>
  )
}

export default memo(LogIn)
