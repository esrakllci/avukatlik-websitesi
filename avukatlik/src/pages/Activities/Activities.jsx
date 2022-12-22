import React, { useEffect, useState } from 'react'
import './Activities.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ActivitiesCard from '../../components/ActivitiesCard/ActivitiesCard'
import axios from 'axios'

const Activities = () => {
  const baseUrl = 'http://5.180.105.38:3000'
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`${baseUrl}/works`)
      .then(res => {
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar />
      <div>
        <img src={require('../../assets/img/legal-law-2021-10-17-11-24-11-_fc.png')} alt="" className='w-full activities-image' />
      </div>
      <div className='md:mb-[100px] mb-[76px]'>
        <div className='projects-head'>
          <p className='col-span-3 projects-head-hr'></p>
          <p className='col-span-6 font-lora font-bold'>Çalışma Alanlarımız</p>
          <p className='col-span-3 projects-head-hr'></p>
        </div>
      </div>
      {data && data?.map(element => {
        return <div className='activities-disclosure'>
          <ActivitiesCard
            question={element.question}
            answer={element.answer}
          />
        </div>
      })}
      <div className='h-[300px]'></div>
      <Footer />
    </div>
  )
}

export default Activities