import React from 'react'
import { NavLink } from 'react-router-dom'

const Blog = ({ post }) => {
    return (
        <div className='pb-5'>
            <NavLink to={`/blog/${post.id}`}>
                <p className='font-bold'>{post.title}</p>
            </NavLink>
            <p>by <span className='italic'>{post.author}</span> on
                <span className='font-medium italic'>
                    <NavLink to={`/categories/${post.category.replace(" ", "-")}`}>
                        {post.category}
                    </NavLink>
                </span>
            </p>
            <p>posted on {post.date}</p>
            <p className='pt-2 pb-1'>{post.content}</p>
            <p>{post.tags.map((tag, index) => (
                <NavLink to={`/tags/${tag.replace(" ", "-")}`}>
                    <span key={index} className='text-blue-500 underline pe-2 text-sm'>#{tag} </span>
                </NavLink>
            ))}
            </p>
        </div>
    )
}

export default Blog
