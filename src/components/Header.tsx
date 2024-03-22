import styles from "./header.module.css"
import pbLogo from "../assets/PokeLogoW.png"
import { useNavigate } from "react-router-dom";

type HeaderProps ={
    query:string,
    setQuery: (query: string)=>void
}

const Header = ({query,setQuery}:HeaderProps) => {
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        navigate(`/pokedex/pokemon/${query.toLowerCase()}`)
    }
    const backToMain = ()=>{
        navigate(`/pokedex/pokemons/`)
    }

    return (
        <header className={styles.header} >
            <img className={styles.img} src={pbLogo} alt="Logo" onClick={backToMain}/>
            <form onSubmit={handleSubmit}>
                <input className={styles.input}
                    placeholder="Search your pokemon <"
                    value={query}
                    type="text" 
                    onChange={(e)=> setQuery(e.target.value)}
                    />
            </form>
        </header>
    );
};

export default Header;