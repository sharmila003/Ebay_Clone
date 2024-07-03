// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        updateQuantity: (state, action) => {
            const { index, quantity } = action.payload;
            if (state.items[index]) {
                state.items[index].quantity = quantity;
            }
        }

    }
});

export const { addToCart,removeFromCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
