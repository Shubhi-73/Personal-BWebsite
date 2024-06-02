import React from 'react';
import { useParams } from 'react-router-dom';

const books = [
    {
        title: 'The Future of Smart Homes is Game Changing',
        date: 'February 20, 2023',
        description: 'Smart home technology has come a long way in recent years and is only going to get better...',
        content: 'yahoo',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
      },
      {
        title: 'THe Extractive Attention Economy',
        date: 'October 3, 2024',
        description: '“There are only two industries that call their customers “users”: drug trafficking and software.” — Edward Tufte.',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cQeih_d60OnCSjhoSKTmIvLmJXoNxWXYG3-rQzTlfA&s',
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

const BookDetail = () => {
  const { bookId } = useParams();
  const book = books[bookId];

  console.log('book ID:', bookId);
  console.log('book:', book);
  
  if (!book) {
    return <div>book not found</div>;
  }

  return (
    <div className="max-w-5xl mx-32 lg:mx-64 p-4 blogDetail bg-white">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 my-15">{book.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{book.date}</p>
      <img className="w-full h-64 object-cover mb-4 rounded-md" src={book.imgSrc} alt={book.title} />
      <p className="text-gray-700 mb-4">{book.description}</p>
      <p className="text-gray-800 leading-relaxed text-center">{book.content}</p>
    </div>
  );
};

export default BookDetail;
