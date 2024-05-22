import React from 'react';
import { Link } from 'react-router-dom';

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <Link to='/blogs' className='relative p-4 transition-transform transform hover:scale-105'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Blog</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-2xl rounded-lg'
          src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </Link>
      <Link to='/tech' className='relative p-4 transition-transform transform hover:scale-105'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Tech</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-2xl rounded-lg'
          src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </Link>
      <Link to='/books' className='relative p-4 transition-transform transform hover:scale-105'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Books</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-2xl rounded-lg'
          src='https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='/'
        />
      </Link>
    </div>
  );
};

export default Activities;

// import React from 'react';

// const activities = [
//   { title: 'Blog', src: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { title: 'Tech', src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//   { title: 'Books', src: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
// ];

// const Activities = () => {
//   return (
//     <div className='activities-container max-w-full overflow-x-auto whitespace-nowrap mt-[-75px]'>
//       {activities.map((activity, index) => (
//         <div key={index} className='inline-block relative p-4 rounded-lg shadow-lg bg-white text-dark-blue transition-transform transform hover:scale-105 m-4'>
//           <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>{activity.title}</h3>
//           <img
//             className='w-64 h-64 object-cover relative border-4 border-white rounded-lg shadow-2xl'
//             src={activity.src}
//             alt={activity.title}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Activities;

