import React, { createContext, useEffect, useState } from 'react'
import './Products.css'

import Image from './Products/Image'
import Rating from './Products/Rating'
import Title from './Products/Title'
import Description from './Products/Description'
import Price from './Products/Price'
import AddToCart from './Products/AddToCart'

export const dataStore = createContext()

export default function Products() {
    const [value,setValue] = useState({})

    useEffect(()=>{
        async function data(){
            const bolbdata = await fetch('https://dummyjson.com/products');
            const actualdata = await bolbdata.json();
            setValue(actualdata);
        }
        data()
    },[])
    console.log(value)
  return (
    <dataStore.Provider value={{value}}>
        <div className='navbar'>
            <h1>E-commerce</h1>
            {/* <button>Cart</button> */}
        </div>
        <div className='container'>
            {value.products && value.products.map((element)=>{
                return<>
                        <div className='product'>
                            <div>
                                <Image image={element.images[0]}/>
                                <Rating rating={element.rating}/>
                            </div>

                            <div>
                                <Title title={element.title}/>
                                <Description description={element.description}/>
                                <Price price={element.price}/>
                                <AddToCart/>
                            </div>
                        </div>
                    </>
            })}
        </div>
        <div className='navbar'>
            <h1>Cart</h1>
        </div>
    </dataStore.Provider>
  )
}
