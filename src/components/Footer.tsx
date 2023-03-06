import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css'
//Assets
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';


const Footer = () => {
    return (
        <footer className={styles.footer}>
           <Link className={styles.footerLink} to= "/pokemons">
            <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball" />
           <span className={styles.textIcon} >Pokémon</span>
           </Link>
           <Link className={styles.footerLink} to= "/items">
            <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball" />
            <span className={styles.textIcon} >Items</span>
           
           </Link>
           <Link className={styles.footerLink} to= "/map">
            <img className={styles.footerIcon} src={LocationPic} alt="Pokeball" />
            <span className={styles.textIcon} >Mapa</span>
            
           </Link>
        </footer>
    );
};

export default Footer;