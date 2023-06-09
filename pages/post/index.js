// import Post from '@/Components/post/Post';
// import React, { useState } from 'react';

// const posts = ({ posts }) => {

//     // const [num, setNum] = useState(0)
//     // const increaseDecrease = (state) => {
//     //     if (state === "+") {
//     //         setNum(num + 1)
//     //         console.log(num);

//     //     }
//     //     if (state === "-") {
//     //         setNum(num - 1)
//     //     }
//     // }



//     return (
//         <div>
//             <h1 className='text-3xl  '>Products {posts.length}</h1>
//             <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4'>
//                 {
//                     // // posts.map(post => <h2>{post.title}</h2>)
//                     // posts.slice(0, 10).map(post => <Post key={post.id} post={post}></Post>)
//                     posts.map(post => <Post key={post.id} post={post}></Post>)
//                 }
//             </div>
//             <div className="flex flex-wrap justify-center text-center ">

//                 <button onClick={() => increaseDecrease("+")} className='btn bg-[#00a88a] px-5 my-5  text-white text-xl'>Load More</button>
//             </div>
//         </div>
//     );
// };

// export default posts;

// export const getStaticProps = async (index) => {

//     // var i = 0;
//     // console.log('data called');

//     // const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
//     // const res = await fetch("https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=0&limit=30&type=Q_COMMERCE");
//     console.log(index);
//     const res = await fetch("https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=" + i + "&limit=30&type=Q_COMMERCE");
//     const data = await res.json();

//     return {
//         props: {
//             posts: data.products
//         }
//     }

// }


// import Post from '@/Components/post/Post';
// import React, { useState } from 'react';

// const Posts = ({ initialPosts }) => {
//     const [posts, setPosts] = useState(initialPosts);

//     const loadMorePosts = async () => {
//         try {
//             const response = await fetch(
//                 `https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=${posts.length / 10}&limit=10&type=Q_COMMERCE`
//             );
//             const data = await response.json();

//             setPosts((prevPosts) => [...prevPosts, ...data.products]);
//         } catch (error) {
//             console.error('Error loading more posts:', error);
//         }
//     };

//     return (
//         <div>
//             <h1 className="text-3xl">Products {posts.length}</h1>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4">
//                 {posts.map((post) => (
//                     <Post key={post.id} post={post} />
//                 ))}
//             </div>
//             <div className="flex flex-wrap justify-center text-center">
//                 <button onClick={loadMorePosts} className="btn bg-[#00a88a] px-5 my-5 text-white text-xl">
//                     Load More
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Posts;

// export const getStaticProps = async () => {
//     try {
//         const response = await fetch('https://staging-catalog-reader.qcoom.com/api/v1/product/v2?page=0&limit=10&type=Q_COMMERCE');
//         const data = await response.json();

//         return {
//             props: {
//                 initialPosts: data.products,
//             },
//         };
//     } catch (error) {
//         console.error('Error fetching initial posts:', error);
//         return {
//             props: {
//                 initialPosts: [],
//             },
//         };
//     }
// };
