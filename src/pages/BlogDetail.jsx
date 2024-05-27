import React from 'react';
import { useParams } from 'react-router-dom';
import AttentionEconomy from './Blogs/AttentionEconomy';
import AI from './Blogs/AI'
import ShannonNumber from './Blogs/Shannon';

const blogs = [
    {
      title: 'AI owes one to video games',
      date: 'February 20, 2023',
      description: 'How GPUs managed to find widespread uses apart from graphics rendering that have gone to change the world.',
      content:'',
      imgSrc: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*la1uQ9AzDIWft7fc.jpeg',
      },
      {
        title: 'The Extractive Attention Economy',
        date: 'October 3, 2024',
        description: '“There are only two industries that call their customers “users”: drug trafficking and software.” — Edward Tufte.',
        content: '',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cQeih_d60OnCSjhoSKTmIvLmJXoNxWXYG3-rQzTlfA&s',
      },
      {
        title: 'Parallel Universes and Shannon’s number',
        date: 'May 21, 2024',
        description: 'Are there really copies of us out there?',
        content: '',
        imgSrc: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*lO8dOxa0YkLZc8DpkMpjXQ.png',
      },
      {
        title: 'How to Protect Your Privacy Online',
        date: 'February 15, 2023',
        description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
        content: 'yahoo',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
];

const components = [
  AI,
  AttentionEconomy,
  ShannonNumber
];

const BlogDetail = () => {
  const { blogId } = useParams();
  const blog = blogs[blogId];
  const DynamicComponent = components[blogId];

  console.log('Blog ID:', blogId);
  console.log('Blog:', blog);
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
    <div className="max-w-7xl mx-64 p-4 blogDetail">
      <h1 className="mt-10 text-4xl font-bold mb-4 text-gray-800 my-15">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
      <img className="w-full mx-auto h-64 object-cover mb-4 rounded-md align-center" src={blog.imgSrc} alt={blog.title} />
      <p className="text-gray-700 mb-4">{blog.description}</p>
      <p className="text-gray-800 leading-relaxed text-center">{blog.content}</p>    
    </div>
    <DynamicComponent />
    </div>
    
  );
};

export default BlogDetail;
