import styles from "./header.module.css"
import pbLogo from "../assets/PokeLogoW.png"

type HeaderProps ={
    query:string,
    setQuery: (query: string)=>void
}

const Header = ({query,setQuery}:HeaderProps) => {
    return (
        <header className={styles.header} >
            <img className={styles.img} src={pbLogo} alt="Logo" />
            <input className={styles.input}
                placeholder="Search your pokemon <"
                value={query}
                type="text" 
                onChange={(e)=> setQuery(e.target.value)}
                />
        </header>
    );
};

export default Header;