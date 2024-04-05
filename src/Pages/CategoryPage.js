import React from 'react'
import Header from '../Components/Header'
import Posts from '../Components/Posts'
import Pagination from '../Components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

const CategoryPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replace("-", " ");


  return (
    <div>
      <div className='w-full'>
        <Header />
        <div className='w-full flex items-center justify-center'>
          <div className='mt-16 w-6/12 flex flex-row items-center'>
            <button className='border-2 border-indigo-600 rounded p-0.5'
              onClick={() => navigate(-1)}
            >Back</button>
            <h2 className='font-bold ps-2'>Category : <span className='underline'>{tag}</span></h2>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <Posts />
        </div>
        <div className='w-full flex justify-center'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
