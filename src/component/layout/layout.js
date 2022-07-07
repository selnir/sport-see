import { Outlet, Link } from "react-router-dom";
import Logo from "../logo/logo"



const Layout = () => {
  return (
   <> <section className="wrapper">
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
      <div className="wrapper_page">
    <div className="wrapper_nav-v">
      <nav className="nav-v">
        <img src="/meditation.png" alt="KASA"></img>
        <img src="/muscu.png" alt="KASA"></img>
        <img src="/natation.png" alt="KASA"></img>
        <img src="/velo.png" alt="KASA"></img>
      </nav>  
      <p className="copright">Copiryght, SportSee 2020</p>
    </div>      <Outlet />
</div>

    </section>      
</>
  )
};

export default Layout;




