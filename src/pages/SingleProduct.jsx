import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import collectibles from "../data/Collectibles";
import industrial from "../data/Industrial";
import sports from "../data/sportsData";
import Nav1 from '../components/Nav1';
import Nav2 from '../components/Nav2';
import Footer from '../components/footer';

function SingleProduct() {
    const [description, setDescription] = useState({});
    const Id = useSelector(state => state.product.selectedProductId);

    useEffect(() => {
        
        const fetchProductData = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${Id}`);
                const json = await res.json();
                if (json) {
                    setDescription(json);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        if (Id) {
            fetchProductData();

            // Check local data sets
            const localDataSets = [sports, collectibles, industrial];
            for (const dataSet of localDataSets) {
                const foundProduct = dataSet.find(product => product.id === Id);
                if (foundProduct) {
                    setDescription(foundProduct);
                    break;
                }
            }
        }
    }, [Id]);

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
                            <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Add to Cart</button>
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
