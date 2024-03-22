import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import { capitalize, waitFor } from "../utils/utils";
import styles from "./pokemon.module.css";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import goBack from "../assets/GoBack.png";
import hpPic from "../assets/Health.png"
import atkPic from "../assets/Attack.png"
import defPic from "../assets/Defense.png"

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const [query, setQuery] = useState("");
    const { name } = useParams();
    const navigate = useNavigate();
    const typeClass = pokemon?.type && styles[pokemon.type];

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true);
            try{
                const fetchedPokemon = await fetchPokemon(name as string);
                await waitFor(700);
                setPokemon(fetchedPokemon);
                setIsLoading(false);
            }catch(error)
            {
                console.error('pokemon not found',error)
            }          
        }
        getPokemon();
    }, [name]);

    if (isLoading || !pokemon) {
        return (
            <LoadingScreen />
        )
    }
    return (
        <>
            <Header query={query} setQuery={setQuery} enableKeyDown={true} />
            <div className={styles.pokemon}>
                <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                    <img className={styles.pokeballImg} src={goBack} alt="pokeball" />
                    Go back
                </button>
                <main className={styles.pokemonInfo}>
                    <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
                    <div>Pokemon N° {(pokemon?.id).toString().padStart(3, '0')}</div>
                    <div>
                        <img
                            className={styles.pokemonInfoImg}
                            src={pokemon?.imgSrc}
                            alt="bulbasaur"
                        />
                    </div>
                    <div className={`${styles.pokeType} ${typeClass}`}>{capitalize(pokemon?.type)} Type</div>
                    <div>
                        <div className={styles.statsRow}>
                            <div className={styles.statsName} >Health</div>
                            <div>
                                <img className={styles.statsIcon} src={hpPic} alt="hp icon" />
                                {pokemon?.hp}
                            </div>
                        </div>
                        <div className={styles.statsRow}>
                            <div className={styles.statsName} >Attack</div>
                            <div>
                                <img className={styles.statsIcon} src={atkPic} alt="atk icon" />
                                {pokemon?.attack}
                            </div>
                        </div>
                        <div className={styles.statsRow}>
                            <div className={styles.statsName} >Defense</div>
                            <div>
                                <img className={styles.statsIcon} src={defPic} alt="def icon" />
                                {pokemon?.defense}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Pokemon;
