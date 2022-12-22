import React, { useState } from 'react'
import './DashboardListSingle.css'
import { TbEdit } from 'react-icons/tb'
import { RiDeleteBinLine } from 'react-icons/ri'
import Modal from '../Modal/Modal'
import axios from 'axios'

function DashboardListSingle({ title, date, author }) {
  const [state, setState] = useState(false)
  function openModal() { setState(true) }
  function closeModal() { setState(false) }

  return (
    <div className='pb-[30px]'>
      <div className='border-2 border-[#F1F1F5] py-[17px] pl-[50px] flex justify-between'>
        <div>
          <p className='text-[18px] text-[#171725] font-poppins font-semibold mt-[13px]'>{title}</p>
          <p className='text-[#92929d] text-[12px] mt-[7px]'>{date} tarihinde {author} tarafından düzenlenildi</p>
        </div>
        <div className='mr-[15px]'>
          <TbEdit size="1.4em" />
          <Modal state={state} closeModal={closeModal} src={require('../../assets/img/anasayfarandevual.png')} link='https://www.asinbc.com/' />
          <button onClick={openModal}>
            <RiDeleteBinLine className='text-[#e02020] mt-[35px] ' size="1.4em" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardListSingle