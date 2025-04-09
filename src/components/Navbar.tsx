import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Mira</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/MiraCrownHelper" style={styles.link}>Mira Crown Helper</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    backgroundColor: "#333",
    color: "white",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
  },
};

export default Navbar;
