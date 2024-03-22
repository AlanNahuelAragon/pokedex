import styles from "./header.module.css"
import pbLogo from "../assets/PokeLogoW.png"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type HeaderProps ={
    query:string,
    setQuery: (query: string)=>void
}

const Header = ({query,setQuery}:HeaderProps) => {
    const {name} : {name?:string} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(name){
            setQuery(name);
        }
    },[name,setQuery])

    const handleSubmit = ()=>{
        navigate(`/pokedex/pokemons/${query.toLowerCase()}`)
    }
    const backToMain = ()=>{
        setQuery("")
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