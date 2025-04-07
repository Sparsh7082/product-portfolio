import React, { createContext, useEffect, useState } from 'react'
import Cart from './Cart'
import Product from './Product'

export const dataStore = createContext()

export default function Products() {
    const [value,setValue] = useState({})
    const [cart,setCart] = useEffect([])

    useEffect(()=>{
        async function data(){
            const bolbdata = await fetch('https://dummyjson.com/products');
            const actualdata = await bolbdata.json();
            setValue(actualdata);
        }
        data()
    },[])
    
  return (
    <dataStore.Provider value={{value,cart,setCart}}>
        <Cart/>
        <Product/>
    </dataStore.Provider>
  )
}
