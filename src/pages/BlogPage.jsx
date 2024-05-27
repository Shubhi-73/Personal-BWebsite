// import React from 'react';
// import { Link } from 'react-router-dom';


//   const blogs = [
//       {
//         title: 'The Future of Smart Homes is Game Changing',
//         date: 'February 20, 2023',
//         description: 'Smart home technology has come a long way in recent years and is only going to get better...',
//         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//       },
//       {
//         title: 'How Blockchain is Revolutionizing Industries',
//         date: 'February 18, 2023',
//         description: 'Blockchain technology has the potential to transform industries beyond just cryptocurrencies...',
//         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//       },
//       {
//         title: 'The Pros and Cons of Virtual Reality',
//         date: 'February 25, 2023',
//         description: 'Virtual reality has taken the tech world by storm, but is it all sunshine and rainbows?',
//         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//       },
//       {
//         title: 'How to Protect Your Privacy Online',
//         date: 'February 15, 2023',
//         description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
//         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//       },
//     ];


// const BlogPage = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <Link to={`/blogs/${index}`} key={index} className="block">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
//               <img className="w-full h-48 object-cover" src={blog.imgSrc} alt={blog.title} />
//               <div className="p-4">
//                 <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
//                 <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
//                 <p className="text-gray-700">{blog.description}</p>
//               </div>
//             </div>
//           </Link>
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
          title: 'AI owes one to video games',
          date: 'February 20, 2023',
          description: 'How GPUs managed to find widespread uses apart from graphics rendering that have gone to change the world.',
          imgSrc: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*la1uQ9AzDIWft7fc.jpeg',
        },
        {
          title: 'The Extractive Attention Economy',
          date: 'October 3, 2024',
          description: '“There are only two industries that call their customers “users”: drug trafficking and software.” — Edward Tufte.',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cQeih_d60OnCSjhoSKTmIvLmJXoNxWXYG3-rQzTlfA&s',
        },
        {
          title: 'Parallel Universes and Shannon’s number',
          date: 'May 21, 2024',
          description: 'Are there really copies of us out there?',
          imgSrc: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*lO8dOxa0YkLZc8DpkMpjXQ.png',
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
    <div className="max-w-7xl mx-32 p-4 bg-grey">
      <h1 className="text-5xl font-bold mb-12 text-center text-blue-800 my-20">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.map((blog, index) => (
          <Link to={`/blogs/${index}`} key={index} className="block">
            <div className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-56 object-cover" src={blog.imgSrc} alt={blog.title} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{blog.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
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

