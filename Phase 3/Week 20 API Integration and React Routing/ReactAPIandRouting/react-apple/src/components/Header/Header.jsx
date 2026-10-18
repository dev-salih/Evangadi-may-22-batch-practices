import appleLogo from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cartIcon from "../../assets/images/icons/cart-sm.png";
import { Link } from "react-router";
import NavbarList from "../NavbarList";

function Header() {
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={appleLogo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">

                <NavbarList LinkName={"mac"} LinkUrl={"/mac/"} />
                <NavbarList LinkName={"iphone"} LinkUrl={"/iphone/"} />
                <NavbarList LinkName={"ipad"} LinkUrl={"/ipad/"} />
                <NavbarList LinkName={"watch"} LinkUrl={"/watch/"} />
                <NavbarList LinkName={"tv"} LinkUrl={"/tv/"} />
                <NavbarList LinkName={"Music"} LinkUrl={"/Music/"} />
                <NavbarList LinkName={"Support"} LinkUrl={"/Support/"} />
                <NavbarList LinkName={"Support"} LinkUrl={"/Support/"} />

                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={searchIcon} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cartIcon} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
