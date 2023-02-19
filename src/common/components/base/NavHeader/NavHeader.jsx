import {NavLink} from "react-router-dom";

const NavHeader = ({className, activeClassName}) => (
  <nav className={className ? className : ""}>
    <ul>
      <li><NavLink to="/"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Home</NavLink></li>
      <li><NavLink to="/"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Products</NavLink></li>
      <li><NavLink to="/category"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Resources</NavLink></li>
      <li><NavLink to="/"
                   className={({isActive}) => isActive ? activeClassName : undefined}>Pricing</NavLink></li>
    </ul>
  </nav>
);

export default NavHeader;