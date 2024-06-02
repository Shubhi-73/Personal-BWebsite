// import React from 'react';
// import { Link } from 'react-router-dom';

// const books = [
//         {
//           title: 'Stolen Focus',
//           date: 'Johann Hari',
//           description: "Why you can't pay attention...",
//           imgSrc: 'https://m.media-amazon.com/images/I/71Co5QPLAwL._AC_UF1000,1000_QL80_.jpg',
//         },
//         {
//           title: 'Zero to One',
//           date: 'Peter Theil',
//           description: 'Notes on startups and how to build the future...',
//           imgSrc: 'https://m.media-amazon.com/images/I/71uAI28kJuL._AC_UF1000,1000_QL80_.jpg',
//         },
//         {
//           title: 'If God was a Banker',
//           date: 'Ravi Subramanian',
//           description: 'two MBA grad graduates who work their own ways to reach the top...',
//           imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT--q37LMnuXd_epDgFPyYGo7HGCF7zuL-E1VhrlQKA&s',
//         },
//         {
//           title: 'How to Protect Your Privacy Online',
//           date: 'February 15, 2023',
//           description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
//           imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//         },
//         {
//           title: 'How to Protect Your Privacy Online',
//           date: 'February 15, 2023',
//           description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
//           imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//         },
//         {
//           title: 'How to Protect Your Privacy Online',
//           date: 'February 15, 2023',
//           description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
//           imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
//         },
//       ];

// const BookPage = () => {
//   return (
//     <div className="max-w-5xl mx-10 lg:mx-32 p-4">
//       <h1 className="text-5xl font-bold mb-12 text-center text-blue-800 my-20">Books</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//         {books.map((book, index) => (
//           <Link to={`/books/${index}`} key={index} className="block">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
//               <img className="w-full h-56 object-cover" src={book.imgSrc} alt={book.title} />
//               <div className="p-6">
//                 <h2 className=" text-2xl font-bold mb-4 text-gray-900">{book.title}</h2>
//                 <p className="text-gray-500 text-sm mb-4">{book.date}</p>
//                 <p className="text-gray-700">{book.description}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BookPage;

import React from 'react';
import { Link } from 'react-router-dom';

const books = [
        {
          title: 'Stolen Focus',
          date: 'Johann Hari',
          description: "Why you can't pay attention...",
          imgSrc: 'https://m.media-amazon.com/images/I/71Co5QPLAwL._AC_UF1000,1000_QL80_.jpg',
        },
        {
          title: 'Zero to One',
          date: 'Peter Theil',
          description: 'Notes on startups and how to build the future...',
          imgSrc: 'https://m.media-amazon.com/images/I/71uAI28kJuL._AC_UF1000,1000_QL80_.jpg',
        },
        {
          title: 'If God was a Banker',
          date: 'Ravi Subramanian',
          description: 'two MBA grad graduates who work their own ways to reach the top...',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT--q37LMnuXd_epDgFPyYGo7HGCF7zuL-E1VhrlQKA&s',
        },
        {
          title: 'How to Protect Your Privacy Online',
          date: 'February 15, 2023',
          description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP63VhQwMwLHFUP6ovY15xGmSQ5TakDPoVKpZksiF-Q&s',
        },
        {
          title: 'How to Protect Your Privacy Online',
          date: 'February 15, 2023',
          description: 'With the internet being an integral part of our daily lives, it\'s crucial to protect your privacy...',
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
    <div className=" mx-10 lg:mx-24 p-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-blue-800 my-20">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {books.map((book, index) => (
          <Link to={`/books/${index}`} key={index} className="block">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img className="w-auto h-48" src={book.imgSrc} alt={book.title} />
              <div className="p-6">
                <h2 className=" text-2xl font-bold mb-4 text-gray-900">{book.title}</h2>
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