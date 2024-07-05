
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav1 from '../components/Nav1';
import Nav2 from '../components/Nav2';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../components/cartslice';

function SingleProduct() {
    const [description, setDescription] = useState({});
    const selectedProductId = useSelector(state => state.product.selectedProductId);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${selectedProductId}`);
                //console.log('Response status:', res);
                //const text = await res.text(); // Get response as text
                //console.log('API Response:', text); 
                if (res.ok) {
                    const json = await res?.json();
                    setDescription(json);
                } else {
                    throw new Error('API request failed or returned empty response');
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (selectedProductId) {
            fetchProductData();
           console.log(selectedProductId);
        }
    }, [selectedProductId]);

    const handleAddToCart = () => {
        const userEmail = localStorage.getItem('userEmail');
         console.log(localStorage.getItem('userEmail'));
        if (!userEmail) {
            // Navigate to home  or login page if user is not signed in
            console.log('User not signed in, navigating to home page.');
            navigate('/');
        } else {
            // Dispatch action to add item to cart
            console.log('User signed in, adding item to cart:', description);
            dispatch(addToCart(description));
            // Navigate to cart page
            console.log('Navigating to cart page.');
            navigate('/cart');
        }
    };
    


    return (
        <div className='w-full'>
            <div className='w-[90%] mx-auto'><Nav1 /></div>
            <div className='w-[100%] h-[0.4px] bg-gray-300 mx-auto'></div>
            <div className='w-[90%] mx-auto'><Nav2 /></div>
            <div className='w-[100%] h-[0.3px] bg-gray-300 mx-auto'></div>
            
            {description.id && (
                <div className='w-[90%] mx-auto mt-4 flex'>
                    <div className='w-1/2 pr-4'>
                        <img src={description.image} alt={description.title} className='w-full h-auto' />
                    </div>
                    <div className='w-1/2 pl-4 flex flex-col'>
                        <h1 className='text-2xl font-bold'>{description.title}</h1>
                        <p className='text-lg mt-2'><strong>Price:</strong> ${description.price}</p>
                        <p className='text-lg mt-2'><strong>Description:</strong> {description.description}</p>
                        <p className='text-lg mt-2'><strong>Category:</strong> {description.category}</p>
                        {description.rating && (
                            <p className='text-lg mt-2'>
                                <strong>Rating:</strong> {description.rating.rate} ({description.rating.count} reviews)
                            </p>
                        )}
                        <div className='mt-4 flex space-x-4'>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Buy it Now</button>
                            <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600' 
                               onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default SingleProduct;

