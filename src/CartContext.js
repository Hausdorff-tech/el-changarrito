import { queryAllByAltText } from "@testing-library/react";
import React, { createContext, useState } from "react";
import {ProductosTienda, getProductData } from "./ProductosTienda";

//context(cart, addToCart, removeCart)
//Provider -> Gives your react app access to all the things in your context

export const CartContext = createContext({
    items:[],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}  
});

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([]);

    //{ id:1, quantity: 2} -> This is all the info we're putting in our cart
    function getProductQuantity(id){
        const quantity = cartProducts.find( product => product.id === id);
//If it finds the product, then return the .quantity property.        
        if(quantity === undefined){
            return 0;
        }
        //console.log("getProductQuantity: ",quantity.quantity);
        return quantity.quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 0){ //Product is not in cart
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    quantity: 1
                }
            ]);
        }else{ //Product is in cart
            setCartProducts(
                cartProducts.map( 
                    product => 
                    product.id === id
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);

        if(quantity === 1){
            deleteFromCart(id);
        }else{
            setCartProducts(
                cartProducts.map( 
                    product => 
                    product.id === id
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts => 
            cartProducts.filter( currentProduct => {
                return currentProduct.id !== id;
            })
        );
    }

    function getTotalCost(){
        let totalCost = 0;
        cartProducts.map(cartItem => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.precio * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost  
    }
    return(
        <CartContext.Provider value = {contextValue}>
            {children}
        </CartContext.Provider>
    );    
};

export default CartProvider;