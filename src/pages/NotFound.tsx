import { useState } from "react";
import Header from "../components/Header";
import styles from "./notFound.module.css"
import Footer from "../components/Footer";
import pikPik from "../assets/NotFound.png"
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const backToMain = ()=>{
        navigate(`/pokedex/pokemons/`)
    }

    return (
        <>  
            <Header query={query} setQuery={setQuery} />
            <div className={styles.notFound}>
                <div className={styles.notFoundContainer} >
                    <img className={styles.notFoundImage} src={pikPik} alt="pikachu-surprised" />
                    <div className={styles.notFoundText} >
                        Pokemon not found!
                    </div>
                    <button className={styles.notFoundButton} onClick={backToMain} >
                        Back to list
                    </button>
                </div>
            </div> 
            <Footer/>
        </>
    );
};

export default NotFound;