import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link className='nav-link' to='/'>
                <div className='nav-logo'>
                    <img className='logo' src='./pokeball.png' alt='logo' />
                    <h1>Pokéspace</h1>
                </div>
            </Link>

            <ul>
                <Link className='nav-link' to='/pokedex'>
                    <li>Pokédex</li>
                </Link>
                <span className='bar'>|</span>
                <Link className='nav-link' to='/pokestats'>
                    <li>Pokéstats</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
