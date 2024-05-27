// import React from 'react';
// import Hero from './components/Hero';
// import Activities from './components/Activities';

// function App() {
//   return (
    
//       <div className="">
//       <Hero />
//       <Activities />
//     </div>
  
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Navbar from './components/Navbar';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import BookPage from './pages/BookPage';
import BookDetail from './pages/BookDetail';
import AI from './pages/Blogs/AI';
import AttentionEconomy from './pages/Blogs/AttentionEconomy';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
             <Navbar />
              <Hero />
              <Activities />
             
            </>
          } />
          <Route path="/blogs" element={<><Navbar /><BlogPage /></>} />
          {/* <Route path="/blogs/0" element={<><Navbar /><BlogDetail /></>} /> */}
          <Route path="/blogs/:blogId" element={<><Navbar /> <BlogDetail /></>} />
          <Route path="/books" element={<><Navbar /><BookPage /></>} />
          
          <Route path="/books/:bookId" element={<><Navbar /><BookDetail /></>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

