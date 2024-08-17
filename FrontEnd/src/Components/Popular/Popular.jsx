import React from 'react'
import "./Popular.css"
import data_product from "../assets/data"
import Items from '../Items/Items'
const Popular = () => {
    const dataArray = data_product.map((dataItem) => {
        return <Items id={dataItem.id} name={dataItem.name} image={dataItem.image} new_price={dataItem.new_price} old_price={dataItem.old_price} />
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
