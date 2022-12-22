import React, { useState, useEffect } from 'react'
import './BlogSingle.css'
import { useParams } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

const BlogSingle = () => {
  const { id } = useParams()
  console.log(id)
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`http://5.180.105.38:3000/posts/${id}`)
      .then(res => {
        console.log(res.data);
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  return ( 
    <div>
      <Navbar />
      <div>
        <img src={require('../../assets/img/legal-advisor-is-explaining-th_hn.png')} alt="" className='w-full' />
      </div>
      <div>
        <div className='contact-head'>
          <p className='col-span-3 contact-head-hr'></p>
          <p className='col-span-6 font-lora font-bold'>Blog</p>
          <p className='col-span-3 projects-head-hr'></p>
        </div>
      </div>
      <div className='blog-single-base'>
        <p className='blog-single-author2 md:hidden'>{data.author}</p>
        <p className='blog-single-title'>{data.title}</p>
        <div className='md:grid md:grid-cols-12'>
          <div className='col-span-2'></div>
          <img src={data.image} alt="" className='w-full col-span-8 mt-[8px] md:mt-[30px]' />
          <p className='blog-single-title2'>{data.title}</p>
          <div className='col-span-2'></div>
        </div>
        <div className='md:grid md:grid-cols-12'>
          <div className='col-span-2'></div>
          <p className='col-span-8 blog-single-text'>{data.description}</p>
          <div className='col-span-2'></div>
        </div>
        <div className='md:grid md:grid-cols-12'>
          <div className='md:col-span-2'></div>
          <p className='md:col-span-8 blog-single-author'>{data.author}</p>
          <div className='md:col-span-2'></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogSingle