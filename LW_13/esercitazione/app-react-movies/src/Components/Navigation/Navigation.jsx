import styles from "./navigation.module.scss";
import Logo from "../Logo/Logo";

const Navigation = ({}) => {
  const menu = ["Home", "Movies", "My Likes", "Now Trending"];
  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul className={styles.menuContainer}>
        {menu.map((element, index) => (
          <li className={styles.menuItem} key={index}>
            {element}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
