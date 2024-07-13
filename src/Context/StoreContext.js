import { createContext, useEffect, useState } from "react";
import { food_list } from "../Assets/assets";

export const StoreContext = createContext(null);

const StorecontextProvider = (props) =>{

    const [cartItems,setCartItemes] = useState({});

    const addToCart = (itemId) =>{
            if(!cartItems[itemId]){
                setCartItemes((prev) =>({...prev,[itemId]:1}))
            }
            else{
                setCartItemes((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
    }
    const removeFromCart = (itemId) =>{
            setCartItemes((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


   
    useEffect(()=>{
        
    },[cartItems]);
    
    const contextValue = {
            food_list,
            cartItems,
            setCartItemes,
            addToCart,
            removeFromCart

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StorecontextProvider;