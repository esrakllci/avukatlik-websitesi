import React from 'react'
import './BlogCard.css'
import { Link } from 'react-router-dom'

function BlogCard({ src, author, header, text, link }) {
  return (
    <Link to={link}>
      <div className='blog-card-container'>
        <div className='blog-card-img'>
          <p className='blog-card-author md:hidden mb-2'>{author}</p>
          <img src={src} alt="" />
        </div>
        <div className='blog-card-content'>
          <p className='blog-card-author hidden md:inline-block'>{author}</p>
          <h3 className='blog-card-header'>{header}</h3>
          <p className='blog-card-text'>{text}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard