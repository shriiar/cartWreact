import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getGames } from '../../Fake Data/FakeStorage';
import useCart from '../../Hooks/useCart';
import useData from '../../Hooks/useData';
import Cart from '../Cart/Cart';
import Games from '../Games/Games';
import './CartOverview.css'
const CartOverview = (props) => {
    const storedCart = getGames();
    if (storedCart.length === 0) {
        console.log(storedCart.length);
        return (
            <div className='carOverview'>
                <h1 className='text-center text-danger my-5'>Cart is empty</h1>
                <Link to="/" className='link'>Back to home</Link>
            </div>
        );
    }
    else {
        console.log(storedCart);
        const { addToCart, DeleteItem, ramdomAdd, emptyCart, alert, cart, data, random} = props;
        return (
            <div className="row mt-5">
                <div className='col col-md-12 col-lg-9 order-md-first'>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
                        {
                            storedCart.map(items => <Games key={items.id} game={items} addToCart={addToCart}></Games>)
                        }
                    </div>
                </div>
                <div className='col-lg-3'>
                    <Cart cart={cart} fullCart={data} DeleteItem={DeleteItem} ramdomAdd={ramdomAdd} emptyCart={emptyCart} alert={alert}></Cart>
                </div>
            </div>
        )
    }
};

export default CartOverview;