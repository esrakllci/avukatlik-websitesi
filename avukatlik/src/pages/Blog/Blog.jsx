import React, { useEffect, useState } from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BlogCard from '../../components/BlogCard/BlogCard'
import axios from 'axios'


const Blog = () => {
  const baseUrl = 'http://5.180.105.38:3000'
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`${baseUrl}/posts`)
      .then(res => {
        console.log(res.data);
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar />
      <div>
        <img src={require('../../assets/img/woman-reading-paper-news-2022-.png')} alt="" className='w-full' />
      </div>
      <div>
        <div className='projects-head'>
          <p className='col-span-3 projects-head-hr'></p>
          <p className='col-span-6 font-lora font-bold'>Blog</p>
          <p className='col-span-3 projects-head-hr'></p>
        </div>
      </div>
      <div className='mt-[30px] blog-container'>
        <div className='blog-arsiv'>
          <h3 className='blog-arsiv-text'>Arşiv</h3>
          <ul className='blog-arsiv-items'>
            <li>Eylül 2022 / 1</li>
            <li> Ağustos 2022 / 1</li>
            <li>Temmuz 2022 / 1</li>
            <li>Haziran 2022 / 2</li>
            <li>Mayıs 2022 / 1</li>
            <li>Nisan 2022 / 0</li>
            <li>Mart 2022 / 0</li>
            <li>Şubat 2022 / 0</li>
            <li>Ocak 2022 / 0</li>
            <li>Aralık 2021 / 0</li>
          </ul>
        </div>
        <div className='blog-content'>
          {data && data.map(element => {
            return <BlogCard
              key={element._id}
              src={element.image}
              author={element.author}
              header={element.title}
              text={element.description}
              link={`/blog/${element._id}`}
            />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog