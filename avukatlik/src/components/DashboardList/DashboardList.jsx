import React from 'react'
import { IoExitOutline } from 'react-icons/io5'
import { AiOutlineBell } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import './DashboardList.css'
import { Link } from 'react-router-dom'

function DashboardList({ content }) {
  return (
    <div className='dashboardList-base'>
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
      <div className='dashboardList-content-base'>
        <div className='dashboardList-leftbar'>
          <Link to="/dashboard" className='dashboardList-return'>
            <BsArrowLeft className='dashboardList-return-icon' size="1.2em" />
            <p>geri dön</p>
          </Link>
          <div className='dashboardList-search'>
            <p>Arama</p>
            <input />
          </div>
          <div className='dashboardList-filter'>
            <h6>Filtreleme</h6>
            <p>Konulara göre filtreleme</p>
            <select>
              <option>İdare ve Vergi Hukuku</option>
            </select>
          </div>
          <div className='dashboardList-tags'>
            <p>Etiketler</p>
            <select>
              <option>#ceza</option>
            </select>
          </div>
        </div>
        <div className='dashboardList-content'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default DashboardList