import React from "react";

const CardContext=React.createContext({
    item000000:[],
    item:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
});

export default CardContext;

