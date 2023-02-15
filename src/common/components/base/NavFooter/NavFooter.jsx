import {NavLink} from "react-router-dom";

const NavFooter = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Overview</NavLink></li>
      <li><NavLink to="/">Features</NavLink></li>
      <li><NavLink to="/">Pricing</NavLink></li>
      <li><NavLink to="/">Careers</NavLink></li>
      <li><NavLink to="/">Help</NavLink></li>
      <li><NavLink to="/">Privacy</NavLink></li>
    </ul>
  </nav>
);

export default NavFooter;