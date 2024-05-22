// import React from 'react';

// const blogs = [
//   {
//     title: 'The Future of Smart Homes is Game Changing',
//     date: 'February 20, 2023',
//     description: 'Smart home technology has come a long way in recent years and is only going to get better...',
//     imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//   },
//   {
//     title: 'How Blockchain is Revolutionizing Industries',
//     date: 'February 18, 2023',
//     description: 'Blockchain technology has the potential to transform industries beyond just cryptocurrencies...',
//     imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//   },
//   {
//     title: 'The Pros and Cons of Virtual Reality',
//     date: 'February 25, 2023',
//     description: 'Virtual reality has taken the tech world by storm, but is it all sunshine and rainbows?',
//     imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//   },
//   {
//     title: 'How to Protect Your Privacy Online',
//     date: 'February 15, 2023',
//     description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
//     imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//   },
// ];

// const BlogPage = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
//             <img className="w-full h-48 object-cover" src={blog.imgSrc} alt={blog.title} />
//             <div className="p-4">
//               <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
//               <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
//               <p className="text-gray-700">{blog.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


import React from 'react';
import { Link } from 'react-router-dom';


  const blogs = [
      {
        title: 'The Future of Smart Homes is Game Changing',
        date: 'February 20, 2023',
        description: 'Smart home technology has come a long way in recent years and is only going to get better...',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
      {
        title: 'How Blockchain is Revolutionizing Industries',
        date: 'February 18, 2023',
        description: 'Blockchain technology has the potential to transform industries beyond just cryptocurrencies...',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
      {
        title: 'The Pros and Cons of Virtual Reality',
        date: 'February 25, 2023',
        description: 'Virtual reality has taken the tech world by storm, but is it all sunshine and rainbows?',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
      {
        title: 'How to Protect Your Privacy Online',
        date: 'February 15, 2023',
        description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
    ];


const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <Link to={`/blogs/${index}`} key={index} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img className="w-full h-48 object-cover" src={blog.imgSrc} alt={blog.title} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <p className="text-gray-700">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
