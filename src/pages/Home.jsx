import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Home = ({ setId }) => {
  const [data, setData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://693f9c7312c964ee6b706fdf.mockapi.io/products"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (productId) => {
    setId(productId);
    navigate(`/edit/${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `https://693f9c7312c964ee6b706fdf.mockapi.io/products/${productId}`
      );
      setDeleteData(response.data);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product.productId}
            className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">
              {product.productName}
            </h2>
            <p className="text-gray-700 mb-2">${product.productPrice}</p>
            <p className="text-gray-600">{product.productDescription}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleEdit(product.productId)}
            >
              Edit
            </button>
            <button
              className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => handleDelete(product.productId)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
