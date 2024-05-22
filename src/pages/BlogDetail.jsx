import React from 'react';
import { useParams } from 'react-router-dom';

const blogs = [
    {
        title: 'The Future of Smart Homes is Game Changing',
        date: 'February 20, 2023',
        description: 'Smart home technology has come a long way in recent years and is only going to get better...',
        content: 'yahoo',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
      {
        title: 'How Blockchain is Revolutionizing Industries',
        date: 'February 18, 2023',
        description: 'Blockchain technology has the potential to transform industries beyond just cryptocurrencies...',
        content: 'yahoo',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
      {
        title: 'The Pros and Cons of Virtual Reality',
        date: 'February 25, 2023',
        description: 'Virtual reality has taken the tech world by storm, but is it all sunshine and rainbows?',
        content: 'yahoo',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
      {
        title: 'How to Protect Your Privacy Online',
        date: 'February 15, 2023',
        description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
        content: 'yahoo',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
];

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogs[blogId];

  console.log('Blog ID:', blogId);
  console.log('Blog:', blog);
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 blogDetail">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
      <img className="w-full h-64 object-cover mb-4" src={blog.imgSrc} alt={blog.title} />
      <p className="text-gray-700">{blog.description}</p>
      <p>{blog.content}</p>
      {/* Add full content of the blog here */}
    </div>
  );
};

export default BlogDetail;
