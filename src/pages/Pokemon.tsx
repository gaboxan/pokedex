import {useNavigate, useParams} from "react-router-dom"
import {useState, useEffect} from "react";
import PokeballImg from "../assets/pokeball.png"
import Footer from "../components/Footer";
import styles from "./pokemon.module.css"
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";


const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const {name} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function getPokemon() {
            setIsLoading(true)
            const fetchedPokemon = await fetchPokemon(name as string); 
            setPokemon(fetchedPokemon);
            setIsLoading(false)
           
        }
        getPokemon();
    }, [name]);
    function renderPokemonTypes(types: string[]) {
        return types.map((type) => {
          const className = type.toLowerCase();
          return (
            <span key={type} className={styles[className]}>
              {type}
            </span>
          );
        });
      }
    if (isLoading || !pokemon) {
        return <LoadingScreen />;
      }
    return <>

    <button className={styles.pokeballButton} onClick={() => navigate(-1)} > <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> Atras </button>
    <div className={styles.pokemon}> 
        <main className={styles.pokemonInfo }>
        <div className={styles.pokemonTitle }>{pokemon?.name?.toUpperCase()}</div>
        <div>Número {pokemon?.id}</div>
        <div>
            <img className={styles.pokemonInfImg } src={pokemon?.imgSrc} alt={pokemon?.name} />
        </div>
        <div>HP: {pokemon?.hp}</div>
        <div>Ataque: {pokemon?.attack}</div>
        <div>Defensa: {pokemon?.defense}</div>
        <div>
    <span>Tipo: </span>
        {renderPokemonTypes(pokemon?.type || [])}
</div>      
    
        </main>
    </div>
    <Footer  />
    </>
   
      

};

export default Pokemon;