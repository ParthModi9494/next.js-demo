import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Navbar.module.css";
const Navbar = (props) => {
  const router = useRouter();
  return (
    <div className={`${props.className} ${classes.navbar}`}>
      <h2>Meetups</h2>
      <ul className={classes.nav_items}>
        <li
          className={`${router.pathname === "/meetups/all" && classes.active}`}
        >
          <Link href="/meetups/all">All Meetups</Link>
        </li>
        <li
          className={`${router.pathname === "/meetups/new" && classes.active}`}
        >
          <Link href="/meetups/new">Add new Meetup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
