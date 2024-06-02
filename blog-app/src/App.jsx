import React, { useState, useEffect } from 'react'
import './App.css'
import { Posts } from './components/Posts'
import { Pagination } from './components/Pagination'
import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(url);
      console.log('res', res);
      setPosts(res.data);
      setLoading(false)
    }
    fetchPosts();
  }, [])

  /* Get current posts(in current page) */
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  /* Change page */
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <h1 className='text-primary'>My Blog</h1>
      <Posts currentPosts={currentPosts} loading={loading} />
      <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        totalPosts={posts.length}
      />
    </div>
  )
}

export default App
