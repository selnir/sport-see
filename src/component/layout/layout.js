import { Outlet, Link } from "react-router-dom";
import Logo from "../logo/logo"



const Layout = () => {
  return (
   <section className="wrapper">
      <section className="header">

      <Logo></Logo>
      <nav>
        <ul>
          <li >
            <Link  to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/reglage">Reglage</Link>
          </li>
          <li>
            <Link to="/commu">Communaute</Link>
          </li>
        </ul>
      </nav>
      </section>
    <Outlet />

   
</section>
  )
};

export default Layout;




