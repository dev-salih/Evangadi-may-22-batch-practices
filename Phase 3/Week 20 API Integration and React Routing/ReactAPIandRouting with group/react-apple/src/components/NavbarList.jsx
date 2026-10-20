import { Link } from "react-router";

function NavbarList({Linkname, Linkurl}) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={Linkurl}>
          {Linkname}
        </Link>
      </li>
    </>
  );
}

export default NavbarList
