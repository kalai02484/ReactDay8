import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({id}) => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://693f9c7312c964ee6b706fdf.mockapi.io/products/${id}`
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://693f9c7312c964ee6b706fdf.mockapi.io/products/${id}`,
        formData
      );
      alert("Product updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }       
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 min-h-screen max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="productName">
            Product Name:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="productName"
            name="productName"
            onChange={handleChange}
            value={formData.productName}
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="productPrice">
            Product Price:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="productPrice"
            name="productPrice"
            onChange={handleChange}
            value={formData.productPrice}
          />
        </div>
        <div>
          <label
            className="block mb-1 font-semibold"
            htmlFor="productDescription"
          >
            Product Description:
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="productDescription"
            name="productDescription"
            onChange={handleChange}
            value={formData.productDescription}
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="productImage">
            Product Image URL:
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="productImage"
            name="productImage"
            onChange={handleChange}
            value={formData.productImage}
          />
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          type="submit"
          onClick={handleSubmit}
        >
            Update Product
        </button>
      </form>
    </div>
  );
};

export default Edit;
