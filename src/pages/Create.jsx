import React from 'react'

const Create = () => {
  return (
    <div className='container mx-auto p-4 min-h-screen max-w-2xl'>
        <h1 className='text-3xl font-bold mb-4'>Create Products</h1>
        <form className='space-y-4'>
            <div>
                <label className='block mb-1 font-semibold' htmlFor='productName'>Product Name:</label>
                <input className='w-full p-2 border border-gray-300 rounded' type='text' id='productName' name='productName' onChange={()=>handleChange(e.target.value)}/>

            </div>
            <div>
                <label className='block mb-1 font-semibold' htmlFor='productPrice'>Product Price:</label>
                <input className='w-full p-2 border border-gray-300 rounded' type='number' id='productPrice' name='productPrice' />
            </div>
            <div>
                <label className='block mb-1 font-semibold' htmlFor='productDescription'>Product Description:</label>
                <textarea className='w-full p-2 border border-gray-300 rounded' id='productDescription' name='productDescription'></textarea>
            </div>
            <div>
                <label className='block mb-1 font-semibold' htmlFor='productImage'>Product Image URL:</label>
                <input className='w-full p-2 border border-gray-300 rounded' type='text' id='productImage' name='productImage' />
            </div>
            <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600' type='submit'>Create Product</button>
        </form>      
    </div>
  )
}

export default Create
