import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/home/'
import './styles/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Posts } from './components/posts'
import { Post } from './components/post'
import { Menu } from './components/menu'
import { NotFound } from './components/not found'
import { Redirect } from './components/redirect'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}>
          <Route path=':id' element={<Post/>}/>
        </Route>
        {/* <Route path='/post/:id' element={<Post/>}/> */}
        <Route path='/redirect' element={<Redirect/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
