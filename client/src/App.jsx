import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';


const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between
      items-center bg-white sm:px-8 px-4 py-4
      border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo} alt="logo"
          className="w-28 object-contain" />
        </Link>

        <Link to="create-post"
        className="font-inter font-medium
        bg-[#6469ff] text-white px-4 py-2 
        rounded-md">Create</Link>
      </header>

      {/* min-h-[calc(100vh-73px)] => minimum height of the main content. calculate full height (100vh) minus
       73 pixels (full height of nav bar)*/}
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create-post" element={ <CreatePost />} />
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App