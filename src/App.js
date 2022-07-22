import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "reactstrap"

// CSS Styles
import "bootstrap/dist/css/bootstrap.css"
import classes from "./styles/App.module.css"

import AuthContextProvider from "./contexts/auth-context"

import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import LogIn from "./pages/LogIn"

function App() {
  return (
    <AuthContextProvider>
      <Router basename="/">
        <Container fluid className={classes.bg + " px-0"}>
          <Container fluid className={classes.container}>
            <Header />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/login" element={<LogIn />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>
        </Container>
      </Router>
    </AuthContextProvider>
  )
}

const PageNotFound = () => (
  <div className={classes.error}>
    <h2>404 | Resource not found.</h2>
  </div>
)

export default App
