import { useEffect, useState } from "react";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types.d";
import { waitFor } from "../utils/utils";
import { Link } from "react-router-dom";
import styles from "./pokemons.module.css";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import MS0 from "../assets/MSN0.webp"
import MS1 from "../assets/MSN1.webp"
import MS2 from "../assets/MSN2.webp"
import MS3 from "../assets/MSN3.webp"



const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const missingNO = [MS0,MS1,MS2,MS3];

  const randomImg = missingNO[Math.floor(Math.random()*missingNO.length)]

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      const allPokemons = await fetchPokemons();
      await waitFor(700);
      setPokemons(allPokemons);
      setIsLoading(false);
    };
    fetchAllPokemons();
  }, []);

  if (isLoading || !pokemons){
    return(
      <LoadingScreen/>
    )
  }

  const filteredPokemons = pokemons?.slice(0,151).filter((pokemon)=>{
  return pokemon.name.toLowerCase().match(query.toLocaleLowerCase())})

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={styles.nav} >
          {filteredPokemons?.length===0 ?(
            <div className={styles.listItem}>
              <img
                className={styles.listItemIcon}
                src={randomImg}
                alt="Not found"
              />
              <div className={styles.listItemText}>
                <span>Pokemon not found</span>
                <span>???</span>
              </div>
            </div>
          ):(
          filteredPokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokedex/pokemon/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          )))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
