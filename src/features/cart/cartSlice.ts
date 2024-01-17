import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            state.cart.push(action.payload);
        },
        deleteItem(state,action){
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        increaseItemQuantity(state,action){
            const item = state.cart.find((item) => item.id  === action.id);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state,action){
            const item = state.cart.find((item) => item.id  === action.id);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
       
        },
        clearCart(state){
            state.cart = [];
        }

    }
})

export default cartSlice.reducer;

export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions;

//Selectors to use with the hook useSelector.
export const getCart = (store) => store.cart.cart;
export const getTotalCartItems = (store) => store.cart.cart.reduce((total,item)=> item.quantity +  total,0);
export const getTotalCartPrice = (store) => store.cart.cart.reduce((total,item)=> item.totalPrice +  total,0);