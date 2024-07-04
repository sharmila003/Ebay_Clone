//cartSlice.js
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartData = createAsyncThunk('cart/fetchCartData', async () => {
    const response = await fetch('/api/cart'); // Replace with your API endpoint
    const data = await response.json();
    return data;
});



const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
      },
    reducers: {
        setCartItems(state, action) {
        state.items = action.payload;
        },
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

     },
    /*extraReducers: (builder) => {
        builder
          .addCase(fetchCartData.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCartData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
          })
          .addCase(fetchCartData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },*/

});
export const { setCartItems,addToCart,removeFromCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;


