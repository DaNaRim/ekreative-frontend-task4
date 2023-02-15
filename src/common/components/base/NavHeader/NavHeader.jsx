import {NavLink} from "react-router-dom";

const NavHeader = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/">Products</NavLink></li>
      <li><NavLink to="/category">Resources</NavLink></li>
      <li><NavLink to="/">Pricing</NavLink></li>
    </ul>
  </nav>
);

export default NavHeader;