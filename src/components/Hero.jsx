import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-[70vh] hero'>
      {/* <img
        src='https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80'
        alt='/'
        className='w-full h-full object-cover'
      /> */}
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[20%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='text-4xl'>Hi There!</h1>
          <h1 className='text-2xl py-5 italic'>Bounce on whatever you like!</h1>
          {/* <h2 className='text-4xl py-4 italic'></h2> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from 'react';

// const Hero = () => {
//   return (
//     <div className='w-full h-[70vh] hero flex items-center justify-center'>
//       <div className='max-w-[600px] text-center p-4'>
//         <h1 className='text-5xl font-bold mb-4'>Hi There!</h1>
//         <h2 className='text-2xl italic'>Bounce on whatever you like!</h2>
//       </div>
//     </div>
//   );
// };

// export default Hero;

