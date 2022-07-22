import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Navbar, Nav, Collapse, NavItem, NavbarToggler } from "reactstrap"

const Header = () => {
  const [navBarExpand, setNavBarExpand] = useState(false)

  const toggleNav = () => setNavBarExpand(!navBarExpand)

  return (
    <Navbar color="danger" light expand={"false"} className=" px-0 mx-0">
      <Link
        to="/"
        className="navbar-brand"
        onClick={() => setNavBarExpand(false)}
      >
        Brand.
      </Link>
      <NavbarToggler onClick={toggleNav} />
      <Collapse navbar isOpen={navBarExpand}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={toggleNav}
            >
              LogIn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/components2"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={toggleNav}
            >
              Components
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
