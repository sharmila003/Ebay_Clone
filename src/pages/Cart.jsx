
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav1 from "../components/Nav1";
import Nav2 from "../components/Nav2";
import Footer from '../components/footer';
import { removeFromCart, updateQuantity } from '../components/cartslice';

const Cart = () => {
  const items = useSelector(state => state.cart.items); // Access the cart items
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleQuantityChange = (index, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ index, quantity }));
    }
  };

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className='w-full'>
      <div className='w-full'>
        <div className='w-[90%] mx-auto'><Nav1/></div>
        <div className='w-[100%] h-[0.4px] bg-gray-300 mx-auto'></div>
        <div className='w-[90%] mx-auto'><Nav2/></div>
      </div>
      <div className='w-[90%] mx-auto mt-6 flex'>
        <div className='w-[65%]'>
          <h1 className='text-3xl font-bold'>Shopping Cart</h1>
          {items.length === 0 ? (
            <p className='mt-4'>Your cart is empty.</p>
          ) : (
            <div className='mt-4'>
              {items.map((item, index) => (
                <div key={index} className='flex mb-4'>
                  <img src={item.image} alt={item.title} className='w-20 h-20' />
                  <div className='ml-4 flex-1'>
                    <h2 className='text-lg font-bold'>{item.title}</h2>
                    <p className='text-lg'>${item.price}</p>
                    <input 
                      type='number' 
                      value={item.quantity} 
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                      className='border border-gray-300 p-1 w-16 text-center'
                    />
                    <button 
                      className='text-red-500 ml-4' 
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='w-[35%] ml-4 bg-gray-100 p-4'>
          <h2 className='text-xl font-bold'>Summary</h2>
          <p className='text-lg mt-2'>Subtotal: ${calculateTotal()}</p>
          <button 
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 w-full'
            onClick={() => navigate('/checkout')}
          >
            Go to Checkout
          </button>
          <button 
            className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4 w-full'
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Cart;


