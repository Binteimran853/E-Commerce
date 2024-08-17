import React from 'react'
import "./NewCollections.css"
import Items from '../Items/Items'
import data_product from '../assets/new_collections'
const NewCollections = () => {
    const newCollectionArray = data_product.map((DtataItems) => {
        return <Items id={DtataItems.id} name={DtataItems.name} image={DtataItems.image} new_price={DtataItems.new_price} old_price={DtataItems.old_price} />
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
