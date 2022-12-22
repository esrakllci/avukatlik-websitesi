import React from 'react'
import './DashboardBase.css'
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlineBell } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const DashboardBase = () => {
  return (
    <div className='dashboardbase-main'>
      <div className='dashboardbase-header'>
        <div className='dashboardbase-header-logo'>
          <p>DEMİR HUKUK BÜROSU</p>
        </div>
        <div className='dashboardbase-header-directions'>
          <ul>
            <li>
              <AiOutlineBell size="2em" className='text-[#92929D]' />
            </li>
            <li>
              <button className='bg-[#FC5A5A] h-[32px] w-[32px] rounded-xl'></button>
            </li>
            <li>
              <IoExitOutline size="2em" className='text-[#F28C28]' />
            </li>
          </ul>
        </div>
      </div>
      <div className='dashboardbase-component mx-[300px]'>
        <Link to="/" className="dashboardbase-txt-site">siteye geri dön</Link>
        <Link to="/dashboardBlogs">
          <div className='dashboard-component-box'>
            <p className='dashboardbase-box-title'>Blog Gönderi Listesi</p>
            <p className='dashboardbase-box-text'>Buradan blog gönderilerinizi düzenleyebilir veya silebilirsiniz.</p>
          </div>
        </Link>
        <Link to="/dashboardWorks">
          <div className='dashboard-component-box'>
            <p className='dashboardbase-box-title'>Çalışma Alanları Listesi</p>
            <p className='dashboardbase-box-text'>Buradan “Çalışma Alanları” bölümünü düzenleyebilirsiniz.</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DashboardBase