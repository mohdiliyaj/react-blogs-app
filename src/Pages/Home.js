import React from 'react'
import Header from '../Components/Header'
import Posts from '../Components/Posts'
import Pagination from '../Components/Pagination'

const Home = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-content-center">
            <Header />
            <Posts />
            <Pagination />
        </div>
    )
}

export default Home
