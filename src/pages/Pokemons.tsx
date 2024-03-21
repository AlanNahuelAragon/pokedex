import { useEffect, useState } from "react";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types.d";
import { waitFor } from "../utils/utils";
import { Link } from "react-router-dom";
import styles from "./pokemons.module.css";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";

const Pokemons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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
          {filteredPokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemon/${pokemon.name.toLowerCase()}`}
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
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
