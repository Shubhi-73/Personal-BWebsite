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
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:blogId" element={<><Navbar /> <BlogDetail /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

