import Post from '@/Component/Post';
import React, { useState } from 'react';

const index = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div>
      <div className="container mx-auto px-24 ">
        <h1 className="text-3xl my-4 pt-1 pb-4 text-[##444] font-bold">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {posts.map((post) => (
            <div key={post.id} className="w-full  flex justify-center">
              <Post post={post} />
            </div>
          ))}
        </div>

      </div>


    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=0&limit=10&type=Q_COMMERCE');
    const data = await response.json();

    return {
      props: {
        initialPosts: data.products,
      },
    };
  } catch (error) {
    console.error('Error fetching initial posts:', error);
    return {
      props: {
        initialPosts: [],
      },
    };
  }
};