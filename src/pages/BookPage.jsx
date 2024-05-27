import React from 'react';
import { Link } from 'react-router-dom';

const books = [
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

const BookPage = () => {
  return (
    <div className="max-w-7xl mx-32 p-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-blue-800 my-20">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {books.map((book, index) => (
          <Link to={`/books/${index}`} key={index} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img className="w-full h-56 object-cover" src={book.imgSrc} alt={book.title} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{book.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{book.date}</p>
                <p className="text-gray-700">{book.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookPage;