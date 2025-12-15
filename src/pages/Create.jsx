import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://693f9c7312c964ee6b706fdf.mockapi.io/products",
        formData
      );
      alert("Product created successfully!");
      setFormData({
        productName: "",
        productPrice: "",
        productDescription: "",
        productImage: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Create Products</h1>
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
            type="number"
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
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Create;
