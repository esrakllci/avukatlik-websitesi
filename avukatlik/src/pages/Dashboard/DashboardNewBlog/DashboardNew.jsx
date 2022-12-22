import React, { useState } from 'react'
import './DashboardNew.css'
import { AiOutlineBell } from 'react-icons/ai'
import { IoExitOutline } from 'react-icons/io5'
import axios from 'axios'
import FileBase64 from 'react-file-base64';

const Dashboard = () => {
  const baseUrl = 'http://5.180.105.38:3000'
  const [postData, setPostdata] = useState({ title: '', description: '', author: '', image: '' })

  const submitData = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}/posts/new`, {
      postData
    }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
    console.log(postData)
  }

  const handleFilechange = ({ name, base64, size, type }) => {
    if (type.split('/')[0] !== 'image' || (Number(size.split(" ")[0]) > 10000)) {
      return
    }
    setPostdata({ ...postData, image: base64 })
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
              <input type="text" value={postData.title} onChange={(e) => setPostdata({ ...postData, title: e.target.value })} />
              {/* <select className='w-full h-[40px] mt-[15px]' id="subject">
                <option value="Ceza Hukuku">Ceza Hukuku</option>
                <option value="Bilişim Hukuku">Bilişim Hukuku</option>
                <option value="İş ve Ceza Hukuku">İş ve Ceza Hukuku</option>
                <option value="İş ve Ceza Hukuku">İş ve Ceza Hukuku</option>
                <option value="İdare ve Vergi Hukuku">İdare ve Vergi Hukuku</option>
                <option value="Gayrimenkul Hukuku">Gayrimenkul Hukuku</option>
                <option value="Tüketici Hukuku">Tüketici Hukuku</option>
              </select> */}
              <p className='text-[16px] font-semibold mt-[20px]'>Gönderen: </p>
              <input value={postData.author} onChange={(e) => setPostdata({ ...postData, author: e.target.value })} />
              {/* <select id='names' className='w-full h-[40px] mt-[15px]'>
                <option className='14px' value=""><a className='w-[24px] h-[24px] bg-[red] rounded-full'></a> <a>Seda Nur Demir</a></option>
                <option className='w-[24px] h-[24px] bg-[red] rounded-full' value="">Seda Nur Demir</option>
              </select> */}
            </div>
            {/* <div className='dashboard-console-tickets'>
              <div className='text-[16px] font-semibold'>Etiketler</div>
            </div> */}
            <div className='dashboard-console-cover-photo'>
              <div className='text-[16px] font-semibold'>Kapak Fotoğrafı</div>
              <label class="custom-file-upload">
                {/* <input className='file-push ' type="file" /> */}
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={handleFilechange}
                />
              </label>

            </div>
            <div className='dashboard-console-bttn grid grid-cols-12' >
              <button className='mr-[15px] w-[115px] bg-[#F1F1F5] text-[#696974] rounded-[10px]'><p className='my-[10px]'>İptal</p></button>
              <button className='w-[150px] bg-[#50B5FF] text-[#FAFAFB] rounded-[10px]' onClick={submitData}><p className='my-[10px]'>Yayınla</p></button>
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
              <input type="textarea" className="border w-full h-full" value={postData.description} onChange={(e) => setPostdata({ ...postData, description: e.target.value })} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard