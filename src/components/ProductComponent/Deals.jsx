import React, { useEffect, useState } from 'react';
import Nav1 from '../Nav1';
import Nav2 from '../Nav2';
import { useDispatch } from 'react-redux';
import { setProductId } from "../../features/category/ProductSlice";
import { useNavigate } from 'react-router';


function Deals() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const dispatch = useDispatch();
  const navigate = useNavigate()



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Error fetching data: ', err));
  }, []);

  const handleProductClick = (id) => {
    console.log(id)
    dispatch(setProductId(id));
    navigate("/singleProduct")
  };

  // Logic to slice data based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='w-[90%] mx-auto'>
        <Nav1 />
      </div>
      <div className='w-[100%] h-[0.4px] bg-gray-300 mx-auto'></div>
      <div className='w-[90%] mx-auto'>
        <Nav2 />
      </div>
      <div className='w-[100%] h-[0.4px] bg-gray-300 mx-auto'></div>

      {/* Display current page items */}
      {currentItems.map(item => (
        <div key={item.id} className="my-3 p-3 bg-white rounded-lg shadow-md" onClick={() => handleProductClick(item.id)}>
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded-md mx-auto" />
          <p className="text-gray-700 mt-2">{item.description}</p>
          <p className="text-gray-900 font-bold mt-2">${item.price}</p>
        </div>
      ))}

      {/* Pagination buttons */}
      <div className="flex justify-center my-5">
        {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Deals;
