import React, { useEffect, useState } from 'react'
import "./NewCollections.css"
import Items from '../Items/Items'
// import data_product from '../assets/new_collections'
const NewCollections = () => {
    const[newCollection,setnewCollection]=useState([]);
    useEffect(()=>{
        const newCollectionProduct=async()=>{
            await fetch('http://localhost:3000/newcollection')
            .then((res)=>res.json())
            .then((data)=>setnewCollection(data))
        }
        newCollectionProduct();
    },[])
    const newCollectionArray = newCollection.map((DtataItems,index) => {
        return <Items key={index} id={DtataItems.id} name={DtataItems.name} image={DtataItems.image} new_price={DtataItems.new_price} old_price={DtataItems.old_price} />
    })
    return (
        <div className='New-collections'>
            <h1>NEW COLLECTIONS</h1><hr />
            <div className="collections">
                {newCollectionArray}
            </div>

        </div>
    )
}

export default NewCollections
