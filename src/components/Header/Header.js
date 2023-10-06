import React, { useEffect } from 'react';
import './Header.css'
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { useSelector } from 'react-redux';
export default function Header() {    
    return (
        <div>
        <Navbar/>
          <div className="HeaderBg p-4 m-4">
            <div className="custom-container">
                <h1 className="mb-5 p-2">Welcome to our movie app</h1>
                <h6 className="p-2">Millions of movies, TV shows and people to discover. Explore now.</h6>
                <Search />
            </div>
        </div>
        </div>
    );
}
