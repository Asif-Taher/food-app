import React, { useContext } from 'react'
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../../FoodItem/FoodItem';

export default function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext);
   
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
          food_list.map((item,index) =>{
            if(category==="All" || category===item.category){
              return <FoodItem key={item._id} item = {item}></FoodItem>
            }
          })
        }
      </div>
    </div>
  )
}
