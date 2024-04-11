import { Outlet, Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav id="nav">
        <div id="ul" className="p-4">
          <div id="lop" className="">
            <Link id="lops" to="/">Home</Link>
          </div>
          <div>
            <Link id="lops" to="/blogs">Blogs</Link>
          </div>
          <div>
            <Link id="lops" to="/contact">Contact</Link>
          </div>
          <div>
            <Link id="lops" to="/signup">Signup</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;