import { Link } from "react-router-dom";
import styles from "./footer.module.css"
import ghPic from "../assets/github-icon.svg"
import fdPic from "../assets/fandom-icon.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki">
                <img className={styles.footerIcon} src={fdPic} alt="pikachu" />
            </Link>
            <Link className={styles.footerLink} to="https://github.com/AlanNahuelAragon/pokedex/">
                <img className={styles.footerIcon} src={ghPic} alt="items" />
            </Link>
        </footer>
    );
};

export default Footer;