import React from 'react';
import Star from './Star';


const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - Math.abs(discountedPrice);
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return discountPercentage.toFixed(0);
};

const ProductsInfo = ({ post }) => {

    if (!post || !post.variations || post.variations.length === 0) {
        // Handle the case where post or variations are undefined or empty
        return null; // or render an error message, loading state, or fallback content
    }

    // Rest of your component code...

    // Access post.variations[0] safely
    const variation = post.variations[0];

    // Check if the necessary properties are defined
    if (!variation || !variation.price) {
        // Handle the case where variation or price is undefined
        return null; // or render an error message, loading state, or fallback content
    }

    // Access variation.price properties safely
    const originalPrice = variation.price.mrp;
    const discountedPrice = variation.price.discountedPrice;

    // Rest of your component code...

    // Ensure that the necessary properties are defined before using them
    // ...






    const discountPercentage = calculateDiscountPercentage(
        post.variations[0].price.mrp,
        post.variations[0].price.discountedPrice
    );

    const productName = post.name.length > 55 ? post.name.slice(0, 55) + '...' : post.name;

    const showDiscount = post.variations[0].price.mrp !== post.variations[0].price.discountedPrice;

    const showNew = post.createdAt.slice(0, 4) === '2023';

    return (
        <div className="w-80 mx-auto">
            <div className="bg-base-100 h-[400px] overflow-hidden">
                <figure className="border-y border-gray-100 relative">


                    {showNew && (

                        <h1 className='absolute top-3 left-1 bg-yellow-400 text-white px-3 text-xs 
py-0 rounded-sm font-semibold '>New</h1>
                    )}



                    {showDiscount && (
                        <h1 className={`absolute ${showNew ? 'top-8' : 'top-3'} left-1 bg-green-600 text-white px-[13px] text-xs py-0 rounded-sm font-semibold`}>
                            {discountPercentage}%
                        </h1>
                    )}

                    <img src={post.productImage} alt="products" className="w-full h-64 object-cover" />
                </figure>
                <div className="px-6 pb-48 pt-2 h-56 flex flex-col justify-between text-center">
                    <div>
                        <h2 className="text-lg font-bold mb-2 h-11 overflow-hidden" style={{ letterSpacing: '-.01em', fontSize: '14px', fontWeight: 500, color: '#666', lineHeight: 1.72 }}>
                            {productName}
                        </h2>

                        {showDiscount && (
                            <div className="flex justify-center items-center mb-2">
                                <h2 className="text-gray text-sm">BDT</h2>
                                <span style={{ fontWeight: 'bold' }} className="line-through text-gray me-2 mx-1">{post.variations[0].price.mrp}</span>
                                <h2 className="text-[#00a88a] ms-5">{discountPercentage}%</h2>
                            </div>
                        )}

                        <h2 className="text-gray" style={{ fontWeight: 'bold', fontSize: '15.75px', color: '#666666' }}>
                            MRP<span className="ml-1">{post.variations[0].price.discountedPrice}</span>
                        </h2>




                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <Star></Star>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsInfo;
