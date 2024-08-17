import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import Items from '../Components/Items/Items';
import { ShopContext } from '../Context/ShopContext';
import dropDown_icon from '../Components/assets/dropdown_icon.png';

const ShopCategory = (props) => {
    const { all_products } = useContext(ShopContext);

    // Filter and map products based on category
    const dataArray = all_products
        .filter(products => products.category === props.category)
        .map(dataItem => (
            <Items
                key={dataItem.id}
                id={dataItem.id}
                name={dataItem.name}
                image={dataItem.image}
                new_price={dataItem.new_price}
                old_price={dataItem.old_price}
            />
        ));

    return (
        <div className='shop--category'>
            <div className='banner'>
                <img src={props.banner} alt='' />
            </div>
            <div className='ShopCategory-indexsort'>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className='ShopCategory-sort'>
                    Sort by <img src={dropDown_icon} alt='' />
                </div>
            </div>
            <div className='ShopCategory-products'>{dataArray}</div>
            <div className='Explore-more'>Explore More</div>
        </div>
    );
};

export default ShopCategory;
