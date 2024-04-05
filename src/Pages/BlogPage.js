import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Blog from '../Components/Blog';
import { AppContext } from '../Context/AppContext';
import Spinner from '../Components/Spinner';
import {useNavigate} from 'react-router-dom'
import Header from "../Components/Header"

const BlogPage = () => {
  let newBaseUrl = 'https://codehelp-apis.vercel.app/api/get-blog';
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {loading, setLoading} = useContext(AppContext);
  const blogId = location.pathname.split('/').pop();

  console.log(blogId)

  async function fetchRelatedData() {
    setLoading(true);
    newBaseUrl += `?blogId=${blogId}`;
    try {
      const response = await fetch(newBaseUrl);
      const result = await response.json();
      console.log(result);
      setBlog(result.blog);
      setRelatedBlogs(result.relatedBlogs);
    } catch (error) {
      console.log('Error occurred:');
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedData();
    }
  }, [location.pathname]);

  return (
    <div className='w-full flex justify-center'>
      <Header />
      <div className='pt-16 pb-8 w-6/12'>
        <div>
          <button
            onClick={() => navigate(-1)} className='border-2 border-indigo-600 rounded p-0.5 mb-2'
          >
            Back
          </button>
        </div>
        {loading ? 
        (
          <Spinner />
        ) : 
        blog ? 
        (
          <div>
            <Blog key={blog.id} post={blog} />
            <h2 className='font-bold text-lg mb-2 underline '>Related Blogs</h2>
             {
              relatedBlogs.map( (post)=>(
                <Blog key={post.id} post={post} />
              ))
             }
          </div>
        )
        :
        (
          <div>
            <p>No Blog Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;