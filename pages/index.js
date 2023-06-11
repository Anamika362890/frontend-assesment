import React, { useState, useEffect } from 'react';

import ProductsInfo from './ProductsInfo';

const Index = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=${page}&limit=10&type=Q_COMMERCE`
      );
      const data = await response.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data.products]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10 &&
        !isLoading &&
        hasMore
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore]);

  return (
    <div className="container mx-auto px-24">
      <h1 className="text-3xl my-4 pt-1 pb-4 text-[##444] font-bold">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="w-full  flex justify-center">
            <ProductsInfo post={post} />
          </div>
        ))}
      </div>
      {isLoading && <div className="flex justify-center my-11">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"></div>

      </div>
      }
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  try {
    const response = await fetch(
      'https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=0&limit=10&type=Q_COMMERCE'
    );
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











