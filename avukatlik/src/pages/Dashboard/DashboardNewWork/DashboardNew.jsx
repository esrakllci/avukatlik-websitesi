import React, { useState } from 'react'
import './DashboardNew.css'
import { AiOutlineBell } from 'react-icons/ai'
import { IoExitOutline } from 'react-icons/io5'
import axios from 'axios'

const Dashboard = () => {
  const baseUrl = 'http://5.180.105.38:3000'
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const postData = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}/works/new`, {
      question,
      answer
    }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
  }

  return (
    <div className='dashboard-base pb-[300px]'>
      <div className='dashboard-header'>
        <div className='dashboard-header-logo'>
          <p>DEMİR HUKUK BÜROSU</p>
        </div>
        <div className='dashboard-header-directions'>
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
      <div>
        <form className='dashboard-console-mail-container grid grid-cols-12'>
          <div className='dashboard-console-left font-poppins'>
            <div className='dashboard-console-choise-topic'>
              <p className='text-[16px] font-semibold'>Konu Seç</p>
              <label className='text-[14px] text-[#92929D] mt-[15px]'>Bu yazı şu bölümde yayınlanacak;</label>
              <br />
              <input type="text"  value={question} onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <div className='dashboard-console-bttn grid grid-cols-12' >
              <button className='mr-[15px] w-[115px] bg-[#F1F1F5] text-[#696974] rounded-[10px]'><p className='my-[10px]'>İptal</p></button>
              <button className='w-[150px] bg-[#50B5FF] text-[#FAFAFB] rounded-[10px]' onClick={postData}><p className='my-[10px]'>Yayınla</p></button>
            </div>
          </div>
          <div className='dashboard-console-right font-poppins'>
            <div className='border-2 border-[#F1F1F5] rounded-t-2xl py-[17px] pl-[50px] flex items-center'>
              <img src={require('../../../assets/img/dashboard_turkey_flag.png')} alt="turkey_flag" />
              <p className='text-[12px] text-[#92929D] ml-4'>Türkçe</p>
            </div>
            <div className='dashboard-input-text pl-[100px]'>
              <p className='dashboard-console-txt-r'>Vergi Hukukunun Unsurları ve İdari Davalar</p>
              <p><small className='dashboard-console-sm-text'>25 dakika önce Seda Nur Demir tarafından düzenlendi.</small></p>
              <input type="textarea" className="border w-full h-full" value={answer} onChange={(e) => setAnswer(e.target.value)} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard