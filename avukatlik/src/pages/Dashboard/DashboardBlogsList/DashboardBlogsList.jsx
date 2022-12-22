import React, { useState, useEffect } from 'react'
import DashboardList from '../../../components/DashboardList/DashboardList'
import DashboardListSingle from '../../../components/DashboardListSingle/DashboardListSingle'
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DashboardBlogsList = () => {
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
    <div className='DashboardBlogsList-base'>
      <DashboardList
        content={<div className='dashboard-console-right font-poppins'>
          <div className='border-2 border-[#F1F1F5] rounded-t-2xl py-[17px] pl-[50px] flex items-center justify-between pr-[60px]'>
            <div className='flex items-center'>
              <img src={require('../../../assets/img/dashboard_turkey_flag.png')} alt="turkey_flag" />
              <p className='text-[12px] text-[#92929D] ml-4'>Türkçe</p>
            </div>
            <div>
              <Link to="/dashboardNewBlog">alan ekle</Link>
            </div>
          </div>
          <div className='dashboard-input-text'>
            {data && data.map(element => {
              return <DashboardListSingle
                key={element._id}
                title={element.title}
                date={element.createdDate}
                author={element.author}
              />
            })}
          </div>
        </div>}
      />
    </div>
  )
}

export default DashboardBlogsList
