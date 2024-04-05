import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import Blog from './Blog'

const Posts = () => {

    const { posts, loading } = useContext(AppContext)

    return (
        <div className='pt-16 pb-8 w-6/12'>
            {
                loading ? (
                    <Spinner />
                ) : (
                    posts.map((post) => (
                        <Blog key={post.id} post={post} />
                    )
                    ))
            }
        </div>
    )
}

export default Posts
