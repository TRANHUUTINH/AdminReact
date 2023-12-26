import React from 'react'
import { Link } from 'react-router-dom';
import { User , 
  ListBullets, 
  ShoppingCart,
  Headphones} from 'phosphor-react';
import "../asset/css/navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar' >
        <div className='links'>
            <Link to ="/">Shop</Link>
            <Link to = "/cart">
                <ShoppingCart size={32} /> 
            </Link>
            <Link to = "/login">
              <User size={32} />
            </Link>
            <Link to = "/list-bullets">
            <ListBullets size={32} />
            </Link>
            <Link to = "/hotline">
            <Headphones size={32} />
            </Link>
        </div>
    </div>
  )
}
