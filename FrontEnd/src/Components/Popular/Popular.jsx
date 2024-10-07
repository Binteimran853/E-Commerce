import React, { useEffect, useState } from 'react'
import "./Popular.css"
// import data_product from "../assets/data"
import Items from '../Items/Items'

const Popular = () => {
    const [popularProducts,setpopularProducts]=useState([]);


useEffect(()=>{
    const getPopularProducts=async()=>{
        await fetch('http://localhost:3000/popular_in_Women')
        .then((res)=>res.json())
        .then((data)=>{console.log(popularProducts);return setpopularProducts(data)});
    console.log(popularProducts) 
    }
    getPopularProducts();
},[])

    

    const dataArray = popularProducts.map((dataItem,index) => {
        return <Items key={index} id={dataItem.id} name={dataItem.name} image={dataItem.image} new_price={dataItem.new_price} old_price={dataItem.old_price} />
    })
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1><hr/>
            <div className="popular-item">
                {dataArray}
            </div>
        </div>
    )
}

export default Popular
